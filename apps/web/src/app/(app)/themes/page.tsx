export default function PalettesPage() {
  return (
    <div className="container pt-20">
      <h1 className="font-display text-center text-5xl font-medium">Trending themes</h1>
      <p className="text-muted-foreground mt-4 text-center">
        Get inspired by thousands of themes and easily export for your popular react ui
        library.
      </p>
      <div className="mt-20 grid grid-cols-5 gap-6">
        <ThemeCard />
        <ThemeCard />
        <ThemeCard />
        <ThemeCard />
        <ThemeCard />
        <ThemeCard />
        <ThemeCard />
        <ThemeCard />
        <ThemeCard />
        <ThemeCard />
      </div>
    </div>
  );
}

interface ThemeCardProps {
  background?: string;
  foreground?: string;
  primary?: string;
  secondary?: string;
}

const ThemeCard = (props: ThemeCardProps) => {
  const {
    background = "#fff",
    foreground = "#000",
    primary = "#4942E4",
    secondary = "#fcba03",
  } = props;

  return (
    <div
      className="h-[300px] overflow-y-scroll rounded border shadow-md"
      style={{ backgroundColor: background }}
    >
      {/* Navbar */}
      <div className="flex justify-between px-4 py-2">
        <div className="w-6">
          <div
            className="h-2 w-4 rounded bg-black"
            style={{ backgroundColor: foreground }}
          />
        </div>
        <div className="flex items-center space-x-1">
          <div className="h-2 w-4 rounded-full" style={{ backgroundColor: foreground }} />
          <div className="h-2 w-4 rounded-full" style={{ backgroundColor: foreground }} />
          <div className="h-2 w-4 rounded-full" style={{ backgroundColor: foreground }} />
        </div>
        <div className="h-2 w-6 rounded" style={{ backgroundColor: primary }} />
      </div>
      {/* main */}
      <div className="mx-auto px-4 pb-6">
        {/* Hero */}
        <div className="flex flex-col items-center pt-8">
          <div
            className="h-2 w-[120px] rounded"
            style={{ backgroundColor: foreground }}
          />
          <div
            className="mt-1 h-2 w-[60px] rounded"
            style={{ backgroundColor: foreground }}
          />
          {/* CTA */}
          <div className="mt-4 flex justify-center space-x-2">
            <div className="h-3 w-8 rounded" style={{ backgroundColor: primary }} />
            <div className="h-3 w-8 rounded border" style={{ borderColor: foreground }} />
          </div>
        </div>
        {/* trusted by */}
        <div className="mt-6 flex flex-col items-center">
          <div className="h-1 w-[40px] rounded" style={{ backgroundColor: foreground }} />
          <div className="mt-1 flex justify-center space-x-1">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-4 rounded-full"
                  style={{ backgroundColor: foreground }}
                />
              ))}
          </div>
        </div>
        {/* features */}
        <div className="mt-4 flex flex-col items-center">
          <div
            className="mt-1 h-2 w-[40px] rounded"
            style={{ backgroundColor: foreground }}
          />
          <div className="mt-2 grid w-full grid-cols-3 gap-2">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-5 rounded"
                  style={{ backgroundColor: foreground }}
                />
              ))}
          </div>
        </div>
        {/* testimonials */}
        <div className="mt-4 flex flex-col items-center">
          <div
            className="mt-1 h-2 w-[70px] rounded"
            style={{ backgroundColor: foreground }}
          />
          <div className="mt-2 grid w-full grid-cols-4 gap-2">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-8 rounded"
                  style={{ backgroundColor: foreground }}
                />
              ))}
          </div>
        </div>
        {/* CTA */}
        <div className="mt-8 flex flex-col items-center">
          <div
            className="h-3 w-[50px] rounded-full"
            style={{ backgroundColor: foreground }}
          />
          <div
            className="mt-1 h-2 w-[70px] rounded"
            style={{ backgroundColor: foreground }}
          />
          <div className="mt-2 h-3 w-8 rounded" style={{ backgroundColor: primary }} />
        </div>
      </div>
      {/* footer */}
      <div className="flex justify-between border border-t px-2 py-2">
        <div className="h-2 w-[70px] rounded" style={{ backgroundColor: foreground }} />
        <div className="flex items-center space-x-1">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-[3px]"
                style={{ backgroundColor: foreground }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
