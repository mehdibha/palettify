// "use client";

// import React from "react";

// interface ThemeWrapperProps extends React.ComponentProps<"div"> {
//   // defaultThemes: Theme[];
//   // themes?: Theme[];
// }

// export function DynamicThemeWrapper({
//   defaultThemes,
//   themes = [],
//   children,
// }: ThemeWrapperProps) {
//   const darkTheme = (themes.find((t) => t.mode === "dark") ??
//     defaultThemes.find((t) => t.mode === "dark")) as Theme;
//   const lightTheme = (themes.find((t) => t.mode === "light") ??
//     defaultThemes.find((t) => t.mode === "light")) as Theme;

//   return (
//     <div>
//       <style jsx global>{`
//         :root {
//           --background: ${lightTheme.background};
//           --foreground: ${lightTheme.foreground};
//           --card: ${lightTheme.card};
//           --card-foreground: ${lightTheme.cardForeground};
//           --popover: ${lightTheme.popover};
//           --popover-foreground: ${lightTheme.popoverForeground};
//           --primary: ${lightTheme.primary};
//           --primary-foreground: ${lightTheme.primaryForeground};
//           --secondary: ${lightTheme.secondary};
//           --secondary-foreground: ${lightTheme.secondaryForeground};
//           --muted: ${lightTheme.muted};
//           --muted-foreground: ${lightTheme.mutedForeground};
//           --accent: ${lightTheme.accent};
//           --accent-foreground: ${lightTheme.accentForeground};
//           --destructive: ${lightTheme.destructive};
//           --destructive-foreground: ${lightTheme.destructiveForeground};
//           --success: ${lightTheme.success};
//           --success-foreground: ${lightTheme.successForeground};
//           --border: ${lightTheme.border};
//           --input: ${lightTheme.input};
//           --ring: ${lightTheme.ring};
//         }

//         .dark {
//           --background: ${darkTheme.background};
//           --foreground: ${darkTheme.foreground};
//           --card: ${darkTheme.card};
//           --card-foreground: ${darkTheme.cardForeground};
//           --popover: ${darkTheme.popover};
//           --popover-foreground: ${darkTheme.popoverForeground};
//           --primary: ${darkTheme.primary};
//           --primary-foreground: ${darkTheme.primaryForeground};
//           --secondary: ${darkTheme.secondary};
//           --secondary-foreground: ${darkTheme.secondaryForeground};
//           --muted: ${darkTheme.muted};
//           --muted-foreground: ${darkTheme.mutedForeground};
//           --accent: ${darkTheme.accent};
//           --accent-foreground: ${darkTheme.accentForeground};
//           --destructive: ${darkTheme.destructive};
//           --destructive-foreground: ${darkTheme.destructiveForeground};
//           --success: ${darkTheme.success};
//           --success-foreground: ${darkTheme.successForeground};
//           --border: ${darkTheme.border};
//           --input: ${darkTheme.input};
//           --ring: ${darkTheme.ring};
//         }
//       `}</style>
//       {children}
//     </div>
//   );
// }
