import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Link } from "lucide-react";
import { getUrlHistory } from "@/lib/actions/getURLS";
import { ScrollArea } from "../ui/scroll-area";
// import { UrlHistory } from "@/data/mock-data";
// import { format } from "date-fns";

export interface UrlHistory {
  id: number;
  url: string;
  status: "Success" | "Failed";
}
// export const urlHistory: UrlHistory[] =

export async function UrlHistoryCard() {
  const urlHistory: UrlHistory[] | [] = await getUrlHistory();

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
            <ScrollArea className=" h-[450px] rounded-md border p-4">
              {urlHistory.map((item) => (
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
                          item.status === "Success" ? "outline" : "destructive"
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
              ))}
            </ScrollArea>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
