import { FormPopover } from "@/components/form/form-popover";
import { Skeleton } from "@/components/ui/skeleton";
import { MAX_FREE_BOARDS } from "@/constants/boards";
import { db } from "@/lib/db";
import { getAvailableCount } from "@/lib/org-limit";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export const BoardList = async () => {
  const { orgId } = auth();

  if (!orgId) return redirect("/select-org");

  const boards = await db.board.findMany({
    where: {
      orgId
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const availableCount = await getAvailableCount();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {boards.map((board) => (
        <Link
          key={board.id}
          href={`/board/${board.id}`}
          className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-xl h-full w-full p-4 overflow-hidden shadow-2xl shadow-purple-300/60 dark:shadow-purple-600/20 hover:shadow-purple-400/70 dark:hover:shadow-purple-500/20"
          style={{ backgroundImage: `url(${board.imageFullUrl})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <p className="relative font-semibold text-white text-base md:text-xl">
            {board.title}
          </p>
        </Link>
      ))}
      <FormPopover sideOffset={10} side="right">
        <div
          role="button"
          className="aspect-video relative h-full w-full bg-muted rounded-xl flex flex-col gap-y-1 items-center justify-center transition shadow-2xl shadow-purple-300/60 dark:shadow-purple-600/20 border-4 border-sky-200/80 dark:border-sky-700/20 hover:shadow-purple-400/70 dark:hover:shadow-purple-500/20"
        >
          <p className="text-base font-semibold">Crea un nuevo tablero</p>
          <span className="text-xs text-green-700 dark:text-green-400">
            {`${MAX_FREE_BOARDS - availableCount} Restantes`}
          </span>
        </div>
      </FormPopover>
    </div>
  );
};

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
    </div>
  );
};
