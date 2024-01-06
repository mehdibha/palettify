import { TabsContent } from "@palettify/ui";
import { ThemeCard } from "@/modules/themes/components/theme-card";

export default function Page() {
  const themes = [
    {
      palette: {
        background: "#fff",
        foreground: "#000",
        primary: "#4942E4",
        secondary: "#fcba03",
        card: "#3d3d54",
      },
    },
    {
      palette: {
        background: "#f7f7f7",
        foreground: "#333",
        primary: "#009688",
        secondary: "#ff5722",
        card: "#c0c0c0",
      },
    },
    {
      palette: {
        background: "linear-gradient(to bottom right, #e4e9ea 10%, #FFDEC1 80%)",
        foreground: "#fff",
        primary: "#4caf50",
        secondary: "#2196f3",
        card: "#2c2c2c",
      },
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold ">My themes</h2>
      <p className="text-muted-foreground">
        Here you can find all the themes you created
      </p>
      <div className="xs:grid-cols-2 mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {themes.map((theme, index) => (
          <ThemeCard key={index} palette={theme.palette} displayVote={false} />
        ))}
      </div>
    </div>
  );
}
