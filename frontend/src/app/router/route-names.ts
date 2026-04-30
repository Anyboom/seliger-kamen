export const RouteNames = {
  index: "app-index",
} as const;

export type RouteNames = (typeof RouteNames)[keyof typeof RouteNames];
