import { Button } from "@palettify/ui";

export default function NotFound() {
  return (
    <div className="mt-32 flex flex-col items-center space-x-4">
      <h1 className="font-cal text-4xl dark:text-white">404</h1>
      <p className="text-lg text-stone-500 dark:text-stone-400">
        This page does not exist, or you do not have permission to view it
      </p>
      <Button href="/" color="primary" className="mt-4">
        Back to Home page
      </Button>
    </div>
  );
}
