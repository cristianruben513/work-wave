import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { uploadStream } from "./upload-stream";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  api_secret: process.env.API_SECRET
});

export async function GET() {
  return NextResponse.json({ message: 'Hello World' });
}

export async function POST(request: Request) {

  // Recuperar el archivo de la petición
  const formData = await request.formData()
  const file = formData.get('image') as File;

  if (!file) {
    return NextResponse.json({
      message: 'No se encontró el archivo'
    });
  }

  const arrayBuffer = await file.arrayBuffer();
  const unit8Array = new Uint8Array(arrayBuffer);

  const result = await uploadStream(unit8Array, {
    folder: 'pdf',
    ocr: 'adv_ocr'
  })

  // Si no se pudo subir el archivo, retornar un error
  if (!result) {
    return NextResponse.json({
      message: 'Error al subir el archivo'
    });
  }

  // Recuperar la información del resultado
  const { asset_id, secure_url, pages, info } = result
  const data = info?.ocr?.adv_ocr?.data

  // Extraer el texto de la información y formatearlo
  const text = data.map((blocks: { textAnnotations: { description: string }[] }) => {
    const annotations = blocks['textAnnotations'] ?? {}
    const first = annotations[0] ?? {}
    const content = first['description'] ?? ''
    return content.trim()
  }).filter(Boolean).join('\n')

  return NextResponse.json({
    id: asset_id,
    url: secure_url,
    text: text
  });
}
