import { redirect } from "next/navigation";
import { createTheme } from "@/modules/themes/services";

export default async function Page() {
  const theme = await createTheme();
  redirect(`/playground/${theme.id}`);
}
