import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { UserPlan } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { FeaturesAll } from "@/schemas/plan";

type plan = {
  totalRequest: number;
  name: string;
  features: FeaturesAll[];
};

export function PlanCard({ plan }: { plan: plan | null }) {
  return (
    <Card className="card-gradient shadow-md border border-white/10">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Current Plan</CardTitle>
          <p className="border-2  border-violet-600  rounded-lg px-2">
            {plan?.name}
          </p>
        </div>
        <CardDescription>Your active subscription plan</CardDescription>
      </CardHeader>

      {!plan ? (
        <div>Unable to get plan Details</div>
      ) : (
        <CardContent>
          <ul className="space-y-2 mb-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="text-sm flex items-center">
                <span className="mr-2 text-violet-500">✓</span>
                {feature.text}
              </li>
            ))}
          </ul>
          {plan.name !== "Premium" && (
            <Button
              variant="outline"
              size="sm"
              className="w-full border-violet-500/50 text-violet-400 hover:text-violet-300 hover:bg-violet-500/20"
            >
              Upgrade Plan
            </Button>
          )}
        </CardContent>
      )}
    </Card>
  );
}
