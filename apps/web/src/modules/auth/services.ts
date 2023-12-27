import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./config";

export function getSession() {
  return getServerSession(authOptions) as Promise<{
    user: {
      id: string;
      name: string;
      username: string;
      email: string;
      image: string;
    };
  } | null>;
}

export const getUser = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return session.user;
};
