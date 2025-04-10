import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingCheckIcon } from "@/components/pricingcheckicon";
import { Badge } from "@/components/ui/badge";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  price: string;
  duration: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
}

export function PricingSection() {
  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      description: "Get started with essential AI features for casual users",
      price: "$0",
      duration: "Forever",
      features: [
        { text: "Up to 50 AI queries/month", included: true },
        { text: "Basic context understanding", included: true },
        { text: "Community access", included: true },
        { text: "Limited browser integration", included: true },
        { text: "500MB storage for saved results", included: true },
        { text: "Custom AI behavior", included: false },
        { text: "Priority Gemini API quota", included: false },
        { text: "Email support (48h response time)", included: true },
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      description: "Advanced tools for regular users and small teams",
      price: "$19",
      duration: "per month",
      features: [
        { text: "Up to 1,000 AI queries/month", included: true },
        { text: "Enhanced context awareness", included: true },
        { text: "Smart summarization & QnA", included: true },
        {
          text: "Full browser integration (Gmail, Docs, YouTube, etc.)",
          included: true,
        },
        { text: "5GB cloud storage", included: true },
        { text: "Custom AI behavior templates", included: true },
        { text: "Email + chat support (12h response time)", included: true },
        { text: "Priority Gemini API quota", included: false },
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Premium",
      description: "Maximum performance and customization for professionals",
      price: "$49",
      duration: "per month",
      features: [
        { text: "Unlimited AI queries", included: true },
        { text: "Contextual memory across tabs and sessions", included: true },
        {
          text: "Pro summarization, translation, coding support",
          included: true,
        },
        {
          text: "Full browser integration + workspace sharing",
          included: true,
        },
        { text: "Unlimited cloud storage", included: true },
        { text: "Custom AI flows & plugin support", included: true },
        { text: "Priority Gemini API quota", included: true },
        { text: "24/7 priority support (chat + email)", included: true },
      ],
      buttonText: "Go Premium",
    },
  ];

  return (
    <section
      className="py-20 px-4 md:px-6 relative h-screen bg-background  "
      id="pricing"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/10 rounded-full blur-[80px]" />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 border border-violet-400 rounded-lg p-4">
              Simple, transparent pricing
            </h2>
            <p className="text-muted-foreground max-w-md">
              Choose the perfect plan for your needs. Always know what you'll
              pay.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`flex flex-col h-full ${
                tier.popular ? "highlight-card pricing-card-shadow" : ""
              }`}
            >
              <CardHeader className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="mt-2">
                      {tier.description}
                    </CardDescription>
                  </div>
                  {tier.popular && (
                    <Badge className="bg-violet-600 hover:bg-violet-600/90">
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">
                    {tier.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <PricingCheckIcon />
                      ) : (
                        <div className="h-4 w-4 rounded-full border border-muted" />
                      )}
                      <span
                        className={
                          feature.included ? "" : "text-muted-foreground"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    tier.popular ? "bg-violet-600 hover:bg-violet-700" : ""
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center text-muted-foreground">
          <p>
            All plans include access to our community forums and basic customer
            support.
            <br />
            Need a custom plan?{" "}
            <a
              href="#"
              className="text-violet-600 hover:underline dark:text-violet-400"
            >
              Contact us
            </a>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
}
