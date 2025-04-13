import { Button } from "@/components/ui/button";
import { JsonValue } from "@prisma/client/runtime/library";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingCheckIcon } from "@/components/landing/pricingcheckicon";
import { Badge } from "@/components/ui/badge";
import { getPlans } from "@/lib/actions/getplans";
import Link from "next/link";

interface Plans {
  popular: boolean;
  name: "Free" | "Pro" | "Premium";
  id: string;
  description: string;
  price: number;
  totalRequest: number;
  features: JsonValue;
}

export async function PricingSection() {
  const pricingTiers: Plans[] = await getPlans();

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
          {pricingTiers.length > 0 &&
            pricingTiers.map((tier, index) => (
              <Card
                key={tier?.name}
                className={`flex flex-col h-full ${
                  tier?.popular ? "highlight-card pricing-card-shadow" : ""
                }`}
              >
                <CardHeader className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{tier?.name}</CardTitle>
                      <CardDescription className="mt-2">
                        {tier?.description}
                      </CardDescription>
                    </div>
                    {tier?.popular && (
                      <Badge className="bg-violet-600 hover:bg-violet-600/90">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${tier?.price}</span>
                    {/* <span className="text-muted-foreground ml-2">
                      {tier.duration}
                    </span> */}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {
                      // @ts-ignore
                      tier &&
                        Array.isArray(tier.features) &&
                        tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            {
                              // @ts-ignore
                              feature.included ? (
                                <PricingCheckIcon />
                              ) : (
                                <div className="h-4 w-4 rounded-full border border-muted" />
                              )
                            }
                            <span
                              className={
                                // @ts-ignore
                                feature.included ? "" : "text-muted-foreground"
                              }
                            >
                              {
                                // @ts-ignore
                                feature.text
                              }
                            </span>
                          </li>
                        ))
                    }
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      tier.popular ? "bg-violet-600 hover:bg-violet-700" : ""
                    }`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    <Link className="w-full" href={"/signup"}>
                      Get Now
                    </Link>
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
