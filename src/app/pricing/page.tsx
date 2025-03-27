import Navbar from "@/components/navbar-no-supabase";
import PricingCard from "@/components/pricing-card";

export const dynamic = "force-dynamic";

export default async function Pricing() {
  // Removed Supabase client initialization
  const user = null;

  // Sample pricing plans data
  const plans = [
    {
      id: "price_starter",
      name: "Starter",
      amount: 49900,
      interval: "month",
      description: "Perfect for small businesses and startups",
    },
    {
      id: "price_pro",
      name: "Professional",
      amount: 99900,
      interval: "month",
      description: "For growing businesses with advanced needs",
    },
    {
      id: "price_enterprise",
      name: "Enterprise",
      amount: 199900,
      interval: "month",
      description: "Custom solutions for large organizations",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans?.map((item: any) => (
            <PricingCard key={item.id} item={item} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
