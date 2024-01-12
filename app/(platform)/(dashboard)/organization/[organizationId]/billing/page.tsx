import { checkSubscription } from "@/lib/subscription";
import { Info } from "../_components/info";
import { SubscriptionButton } from "./_components/subscription-button";

const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />

      <div className="mt-8">
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default BillingPage;
