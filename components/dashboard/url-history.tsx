import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Link } from "lucide-react";
// import { UrlHistory } from "@/data/mock-data";
// import { format } from "date-fns";

export interface UrlHistory {
  id: string;
  url: string;
  timestamp: string;
  status: "success" | "failed";
}
export const urlHistory: UrlHistory[] = [
  {
    id: "1",
    url: "https://api.example.com/analyze",
    timestamp: "2025-04-10T09:23:42",
    status: "success",
  },
  {
    id: "2",
    url: "https://api.example.com/summarize",
    timestamp: "2025-04-09T14:57:12",
    status: "success",
  },
  {
    id: "3",
    url: "https://api.example.com/generate",
    timestamp: "2025-04-08T11:32:05",
    status: "failed",
  },
  {
    id: "4",
    url: "https://api.example.com/analyze",
    timestamp: "2025-04-07T16:45:23",
    status: "success",
  },
  {
    id: "5",
    url: "https://api.example.com/extract",
    timestamp: "2025-04-06T08:12:36",
    status: "success",
  },
];

export function UrlHistoryCard() {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">URL History</CardTitle>
        <CardDescription>Recent API endpoints used</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {urlHistory.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No URL history available
            </p>
          ) : (
            urlHistory.map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-3 border-b border-border pb-3 last:border-0 last:pb-0"
              >
                <div className="bg-secondary p-2 rounded-full">
                  <Link className="h-4 w-4 text-violet-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium truncate max-w-[250px]">
                      {item.url}
                    </p>
                    <Badge
                      variant={
                        item.status === "success" ? "outline" : "destructive"
                      }
                      className="text-xs"
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {/* {format(
                      new Date(item.timestamp),
                      "MMM d, yyyy 'at' h:mm a"
                    )} */}
                    Date
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
