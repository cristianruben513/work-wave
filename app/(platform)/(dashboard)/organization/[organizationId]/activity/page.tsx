import { checkSubscription } from "@/lib/subscription";
import { Suspense } from "react";
import { Info } from "../_components/info";
import { ActivityList } from "./_components/activity-list";

const ActivityPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />

      <div className="mt-8">
        <Suspense fallback={<ActivityList.Skeleton />}>
          <ActivityList />
        </Suspense>
      </div>
    </div>
  );
};

export default ActivityPage;
