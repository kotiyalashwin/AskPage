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

export function PlanCard({ plan }: { plan: string }) {
  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Free":
        return "bg-gray-500/80 text-white border-gray-500/50";
      case "Pro":
        return "bg-violet-600/80 text-white border-violet-500/50";
      case "Premium":
        return "bg-amber-500/80 text-white border-amber-500/50";
      default:
        return "bg-gray-500/80 text-white border-gray-500/50";
    }
  };

  const getFeatures = (plan: string) => {
    switch (plan) {
      case "Free":
        return [
          "1,000 API requests/month",
          "Basic support",
          "Standard response time",
        ];
      case "Pro":
        return [
          "5,000 API requests/month",
          "Priority support",
          "Faster response time",
          "Advanced analytics",
        ];
      case "Premium":
        return [
          "Unlimited API requests",
          "24/7 dedicated support",
          "Instant response time",
          "Custom features",
        ];
      default:
        return [];
    }
  };

  return (
    <Card className="card-gradient shadow-md border border-white/10">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Current Plan</CardTitle>
          <Badge className={`${getPlanColor(plan)} border backdrop-blur-sm`}>
            {plan}
          </Badge>
        </div>
        <CardDescription>Your active subscription plan</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {getFeatures(plan).map((feature, index) => (
            <li key={index} className="text-sm flex items-center">
              <span className="mr-2 text-violet-500">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        {plan !== "Premium" && (
          <Button
            variant="outline"
            size="sm"
            className="w-full border-violet-500/50 text-violet-400 hover:text-violet-300 hover:bg-violet-500/20"
          >
            Upgrade Plan
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
