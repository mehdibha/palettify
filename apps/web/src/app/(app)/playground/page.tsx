import { redirect } from "next/navigation";
import { getSession } from "@/modules/auth/services";

export default async function Page() {
  const session = await getSession();

  await new Promise((resolve) => setTimeout(resolve, 5000));

  redirect("/playground/theme19198191");
}
