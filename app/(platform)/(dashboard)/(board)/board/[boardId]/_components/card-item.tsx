"use client";

import { Draggable } from "@hello-pangea/dnd";
import { Card } from "@prisma/client";
import { useCardModal } from "@/hooks/use-card-modal";

interface CardItemProps {
  data: Card;
  index: number;
};

export const CardItem = ({ data, index, }: CardItemProps) => {
  const cardModal = useCardModal();

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          onClick={() => cardModal.onOpen(data.id)}
          className="border-2 border-transparent hover:border-black dark:hover:border-neutral-500 py-4 px-4 text-sm bg-white/80 dark:bg-neutral-800/40 rounded-md"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};
