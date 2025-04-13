import { Badge, Bell, Settings, User } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "@/lib/auth";

export function DashboardHeader({ plan }: { plan: string }) {
  return (
    <header className="border-b border-border py-4 px-2">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {/* <Badge>{plan}</Badge>
           */}
          <p className="border-2  border-violet-600  rounded-lg px-2">{plan}</p>
        </div>
        <div className="flex items-center space-x-2">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button variant={"outline"}>Logout</Button>
          </form>

          {/* <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </header>
  );
}
