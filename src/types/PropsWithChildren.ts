export type PropsWithChildren<P = unknown> = P & { children?: () => Node | Promise<Node> }
