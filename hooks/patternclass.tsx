"use client";
import { useTheme } from "next-themes";

export function usePatternClass() {
  const { theme } = useTheme();

  if (theme === "light") {
    return "patternLight";
  } else if (theme === "dark" || theme === "system") {
    return "patternDark";
  }

  return "patternDark"; // Default to no pattern class if theme is unknown
}
