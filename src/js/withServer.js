import { test as base } from "vitest-fixture";

export const test = base.extend({
  port: 8000,
  server: async ({ port }, use) => {
    let server = { port };
    await use(server, async () => {
      server = undefined;
    });
  },
});
