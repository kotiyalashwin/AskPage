import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
// import { ApiUsage } from "@/data/mock-data";

export function ApiUsageCard() {
  return (
    <Card className="card-gradient shadow-md border border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">API Usage</CardTitle>
        <CardDescription>Your current API request usage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              12 / 50 requests
            </span>
            <span className="text-sm font-medium">50%</span>
          </div>
          <Progress
            value={50}
            className="h-2 bg-black/40 overflow-hidden border border-white/5"
          />
          <div className="text-sm text-muted-foreground">
            {12 - 50} requests remaining
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
