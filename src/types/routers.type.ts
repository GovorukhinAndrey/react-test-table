export const ROUTER_LINKS = {
  Home: "/",
  Pages: "/pages",
  "Price Plans": "/price-plans",
  Products: "/products",
} as const;

export type TRouterLinks = (typeof ROUTER_LINKS)[keyof typeof ROUTER_LINKS];
export type TRouterLinksName = keyof typeof ROUTER_LINKS;
