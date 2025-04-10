import { ApiUsageCard } from "@/components/dashboard/api-card";
import { ConversationCard } from "@/components/dashboard/conversation-card";
import { DashboardHeader } from "@/components/dashboard/header";
import { PlanCard } from "@/components/dashboard/plan-card";
import { UrlHistoryCard } from "@/components/dashboard/url-history";
import { auth } from "@/lib/auth";

async function page() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground ">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/10 rounded-full blur-[80px]" />
      </div>
      <DashboardHeader plan={"Free"} />
      <main className="flex-1 py-8">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ApiUsageCard />
            <PlanCard plan={"Free"} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UrlHistoryCard />
            <ConversationCard />
          </div>
        </div>
      </main>
    </div>
  );
}
export default page;
