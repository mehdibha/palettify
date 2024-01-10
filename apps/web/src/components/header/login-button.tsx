import { Button } from "@palettify/ui";
import { siteConfig } from "@/config";
import { getSession } from "@/modules/auth/services";

const config = siteConfig.header;

export const LoginButton = async () => {
  const session = await getSession();
  if (!session) {
    return (
      <Button href={config.cta.secondary.href} variant="text" size="sm">
        {config.cta.secondary.label}
      </Button>
    );
  }
  return null;
};
