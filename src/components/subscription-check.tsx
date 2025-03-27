import { redirect } from "next/navigation";
import { checkUserSubscription } from "@/app/actions";
import { requireAuth } from "@/app/middleware-alternative";

interface SubscriptionCheckProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export async function SubscriptionCheck({
  children,
  redirectTo = "/pricing",
}: SubscriptionCheckProps) {
  const session = await requireAuth();
  const user = session.user;

  // Temporarily disable subscription check for development
  // const isSubscribed = await checkUserSubscription(user?.id!);
  const isSubscribed = true;

  if (!isSubscribed) {
    redirect(redirectTo);
  }

  return <>{children}</>;
}
