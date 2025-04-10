import { Badge, Bell, Settings, User } from "lucide-react";
import { Button } from "../ui/button";

export function DashboardHeader({ plan }: { plan: string }) {
  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Free":
        return "bg-gray-500 hover:bg-gray-400";
      case "Pro":
        return "bg-violet-600 hover:bg-violet-500";
      case "Premium":
        return "bg-amber-500 hover:bg-amber-400";
      default:
        return "bg-gray-500 hover:bg-gray-400";
    }
  };

  return (
    <header className="border-b border-border py-4 px-2">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Badge className={`${getPlanColor(plan)} ml-2`}>{plan}</Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
