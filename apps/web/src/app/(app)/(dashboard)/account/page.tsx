import { AccountDetails } from "@/modules/auth/components/account-details";
import { getSession } from "@/modules/auth/services";

export default async function AccountPage() {
  const session = await getSession();
  return (
    <div>
      <h2 className="pl-2 text-2xl font-bold">Account</h2>
      <p className="text-muted-foreground pl-2">
        Manage your account settings and preferences
      </p>
      <AccountDetails
        email={session?.user.email}
        name={session?.user.name}
        username={session?.user.username}
        className="ml-2 mt-4 max-w-sm"
      />
    </div>
  );
}
