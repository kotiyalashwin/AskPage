import { cn } from "@/lib/utils";

interface PricingCheckIconProps {
  className?: string;
}

export function PricingCheckIcon({ className }: PricingCheckIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4 text-violet-600 dark:text-violet-400", className)}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
