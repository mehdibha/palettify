import { useSearchParams } from "next/navigation";
import { UpdateSiteAppearance } from "@/modules/theme-previewer/components/theme-form";

function PalettesPage() {
  useSearchParams();
  return <UpdateSiteAppearance />;
}

export default PalettesPage;
