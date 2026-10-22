import { cn } from "cn";
import type { OptionMarkerProps } from "../types/survey-component-props.types";

export function OptionMarker({ questionType, index, className }: OptionMarkerProps) {
  if (questionType === "dropdown") {
    return (
      <span aria-hidden="true" data-marker="number" className={cn("w-5 shrink-0 text-right text-sm text-text-secondary", className)}>
        {index + 1}.
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      data-marker={questionType === "single_choice" ? "circle" : "square"}
      className={cn(
        "size-4.5 shrink-0 border-2 border-border-strong",
        questionType === "single_choice" ? "rounded-full" : "rounded-[4px]",
        className,
      )}
    />
  );
}
