import { cn } from "@palettify/utils";

interface FormCardLayoutProps extends React.ButtonHTMLAttributes<HTMLFormElement> {
  title: string;
  description?: string;
  helperText?: string;
  cta?: React.ReactNode;
  children?: React.ReactNode;
}

export const FormCardLayout = (props: FormCardLayoutProps) => {
  const { title, description, helperText, cta, children, className, ...restProps } =
    props;

  return (
    <form
      className={cn("border-input bg-card/50 rounded-lg border", className)}
      {...restProps}
    >
      <div className="relative flex flex-col space-y-4 p-6">
        <h2 className="text-xl">{title}</h2>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
        {children}
      </div>
      {(cta || helperText) && (
        <div className="flex items-center justify-between space-x-1 rounded-b-lg border-t p-6">
          <p className="text-muted-foreground text-sm">{helperText}</p>
          {cta}
        </div>
      )}
    </form>
  );
};
