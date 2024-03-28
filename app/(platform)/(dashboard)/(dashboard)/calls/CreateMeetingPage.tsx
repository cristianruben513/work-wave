"use client";

import { ButtonVideoChat } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import {
  Call,
  MemberRequest,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { Copy, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getUserIds } from "./actions";

export default function CreateMeetingPage() {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [startTimeInput, setStartTimeInput] = useState("");

  const [call, setCall] = useState<Call>();

  const client = useStreamVideoClient();

  const { user } = useUser();

  async function createMeeting() {
    if (!client || !user) {
      return;
    }

    try {
      const id = crypto.randomUUID();

      const callType = "default";

      const call = client.call(callType, id);

      const starts_at = new Date(startTimeInput || Date.now()).toISOString();

      await call.getOrCreate({
        data: {
          starts_at,
          // members,
          custom: { description: descriptionInput },
        },
      });

      setCall(call);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  }

  if (!client || !user) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-center text-2xl font-bold">
        Bienvenido {user.username}!
      </h1>
      <div className="mx-auto w-80 space-y-6 rounded-md bg-slate-100 p-5">
        <h2 className="text-xl font-bold">Crear una nueva reunión</h2>
        <DescriptionInput
          value={descriptionInput}
          onChange={setDescriptionInput}
        />
        <StartTimeInput value={startTimeInput} onChange={setStartTimeInput} />
        <ButtonVideoChat onClick={createMeeting} className="w-full">
          Crear reunión
        </ButtonVideoChat>
      </div>
      {call && <MeetingLink call={call} />}
    </div>
  );
}

interface DescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
}

function DescriptionInput({ value, onChange }: DescriptionInputProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="space-y-2">
      <div className="font-medium">Información de la reunión:</div>
      <label className="flex items-center gap-1.5">
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => {
            setActive(e.target.checked);
            onChange("");
          }}
        />
        Agregar descripción
      </label>
      {active && (
        <label className="block space-y-1">
          <span className="font-medium">Descripción</span>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            maxLength={500}
            className="w-full rounded-md border border-gray-300 p-2"
          />
        </label>
      )}
    </div>
  );
}

interface StartTimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

function StartTimeInput({ value, onChange }: StartTimeInputProps) {
  const [active, setActive] = useState(false);

  const dateTimeLocalNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60_000
  )
    .toISOString()
    .slice(0, 16);

  return (
    <div className="space-y-2">
      <div className="font-medium">La reunión comienza:</div>
      <label className="flex items-center gap-1.5">
        <input
          type="radio"
          checked={!active}
          onChange={() => {
            setActive(false);
            onChange("");
          }}
        />
        Iniciar reunión ahora
      </label>
      <label className="flex items-center gap-1.5">
        <input
          type="radio"
          checked={active}
          onChange={() => {
            setActive(true);
            onChange(dateTimeLocalNow);
          }}
        />
        Iniciar reunión a las fecha/hora
      </label>
      {active && (
        <label className="block space-y-1">
          <span className="font-medium">Hora de inicio</span>
          <input
            type="datetime-local"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min={dateTimeLocalNow}
            className="w-full rounded-md border border-gray-300 p-2"
          />
        </label>
      )}
    </div>
  );
}

interface ParticipantsInputProps {
  value: string;
  onChange: (value: string) => void;
}

interface MeetingLinkProps {
  call: Call;
}

function MeetingLink({ call }: MeetingLinkProps) {
  const meetingLink = `${process.env.NEXT_PUBLIC_APP_URL}/calls/meeting/${call.id}`;

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex items-center gap-3">
        <span>
          Enlace de invitado:{" "}
          <button
            title="Copiar enlace de invitado"
            onClick={() => {
              navigator.clipboard.writeText(meetingLink);
              alert("Copiado al portapapeles");
            }}
            className="flex gap-x-3"
          >
            <Link href={meetingLink} className="font-medium">
              {meetingLink}
            </Link>
            <Copy />
          </button>
        </span>
      </div>
    </div>
  );
}
