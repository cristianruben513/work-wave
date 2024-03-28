import useLoadRecordings from "@/hooks/useLoadRecordings";
import useStreamCall from "@/hooks/useStreamCall";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function RecordingsList() {
  const call = useStreamCall();

  const { recordings, recordingsLoading } = useLoadRecordings(call);

  const { user, isLoaded: userLoaded } = useUser();

  if (userLoaded && !user) {
    return (
      <p className="text-center">
        Debes iniciar sesión para ver las grabaciones.
      </p>
    );
  }

  if (recordingsLoading) return <Loader2 className="mx-auto animate-spin" />;

  return (
    <div className="space-y-3 text-center">
      {recordings.length === 0 && <p>No hay grabaciones de esta reunión.</p>}
      <ul className="list-inside list-disc">
        {recordings
          .sort((a, b) => b.end_time.localeCompare(a.end_time))
          .map((recording) => (
            <li key={recording.url}>
              <Link
                href={recording.url}
                target="_blank"
                className="hover:underline"
              >
                {new Date(recording.end_time).toLocaleString()}
              </Link>
            </li>
          ))}
      </ul>
      <p className="text-sm text-gray-500">
        Nota: Puede pasar hasta 1 minuto antes de que aparezcan nuevas
        grabaciones.
        <br />
        Puede actualizar la página para ver si hay nuevas grabaciones
        disponibles.
      </p>
    </div>
  );
}
