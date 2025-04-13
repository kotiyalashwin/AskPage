import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { use } from "react";
// import { ApiUsage } from "@/data/mock-data";

export function ApiUsageCard({
  usedRequest,
  totalRequest,
}: {
  usedRequest: number;
  totalRequest: number;
}) {
  const exceeded = usedRequest >= totalRequest;
  return (
    <Card
      className={`card-gradient shadow-md border ${
        exceeded ? "border-red-600/50" : "border-white/10"
      }`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">API Usage</CardTitle>
        <CardDescription>Your current API request usage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {Math.min(10, usedRequest)} requests
            </span>
            <span className="text-sm font-medium">
              {Math.min(100, (usedRequest / totalRequest) * 100)}%
            </span>
          </div>
          <Progress
            value={(usedRequest / totalRequest) * 100}
            className="h-2 bg-black/40 overflow-hidden border border-white/5"
          />
          <div className="text-sm text-muted-foreground">
            Remaining: {Math.max(0, totalRequest - usedRequest)}
          </div>
          {usedRequest >= totalRequest && (
            <p className="text-xs text-red-500 mt-1">
              You've exceeded your plan limit!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
