# admin-react

The Runlume **standard admin application**: routes and menus, session and permission wiring, how to mount
the console shell, and a set of reference pages (dashboard, customers, notifications, settings, auth,
component gallery). Its UI comes entirely from `@runlume/admin-ui`.

```bash
pnpm install
pnpm dev            # http://localhost:5173
```

`package.json` depends on the published `@runlume/admin-ui`; while developing the library locally,
`pnpm-workspace.yaml` overrides it with `link:../admin-ui` (remember to run `pnpm build:lib` in the
library after changing it, and to drop the override once 0.3.0 is published).

```bash
pnpm check      # format check + typecheck + lint + unit tests + production build
pnpm test:e2e   # Playwright: console shell, auth, notifications, accessibility
```

Apache-2.0, see [LICENSE](LICENSE) and [NOTICE](NOTICE).
