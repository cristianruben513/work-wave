"use client";

import { copyCard } from "@/actions/copy-card";
import { deleteCard } from "@/actions/delete-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAction } from "@/hooks/use-action";
import { useCardModal } from "@/hooks/use-card-modal";
import { CardWithList } from "@/types";
import { Copy, Trash } from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export const Actions = ({ data }: { data: CardWithList }) => {
  const params = useParams();
  const cardModal = useCardModal();

  const {
    execute: executeCopyCard,
    isLoading: isLoadingCopy,
  } = useAction(copyCard, {
    onSuccess: () => {
      toast.success(`Copiado`);
      cardModal.onClose();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const {
    execute: executeDeleteCard,
    isLoading: isLoadingDelete,
  } = useAction(deleteCard, {
    onSuccess: () => {
      toast.success(`Eliminado`);
      cardModal.onClose();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onCopy = () => {
    const boardId = params.boardId as string;
    executeCopyCard({
      id: data.id,
      boardId,
    });
  };

  const onDelete = () => {
    const boardId = params.boardId as string;

    executeDeleteCard({
      id: data.id,
      boardId,
    });
  };

  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">
        Acciones
      </p>
      <Button
        onClick={onCopy}
        disabled={isLoadingCopy}
        variant={"secondary"}
        className="w-full justify-start"
        size="inline"
      >
        <Copy className="h-4 w-4 mr-2" />
        Copiar
      </Button>
      <Button
        onClick={onDelete}
        disabled={isLoadingDelete}
        className="w-full justify-start"
        variant={"secondary"}
        size="inline"
      >
        <Trash className="h-4 w-4 mr-2" />
        Eliminar
      </Button>
    </div>
  );
};

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200 dark:bg-neutral-700" />
      <Skeleton className="w-full h-8 bg-neutral-200 dark:bg-neutral-700" />
      <Skeleton className="w-full h-8 bg-neutral-200 dark:bg-neutral-700" />
    </div>
  );
};
