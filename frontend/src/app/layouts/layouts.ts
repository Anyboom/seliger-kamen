export const Layouts = {
  main: "main",
} as const;

export type Layouts = (typeof Layouts)[keyof typeof Layouts];
