# admin-react 协作约定

本仓库是 **Runlume 标准后台应用**：应用层接线与标准页面的参考实现，界面与交互能力来自
`@runlume/admin-ui`。组件库在 `../admin-ui`，本仓库不复制它的实现。

## 1. 边界

- 应用层放：路由表、菜单与分组、会话与权限接线、业务页面、语言包中本应用自己的部分、演示数据。
- 界面细节不要在这里重写：布局、侧栏、顶栏、页签、设置弹窗、偏好与无障碍都从组件库取；
  需要新能力时先到 `admin-ui` 补，再升版本，**禁止把库里的组件复制进来改**。
- 组件库不绑定产品：品牌、仓库地址、站点地址由本仓库通过 props 传给库（见 `src/components/app-*`）。

## 2. 结构与接线

目录结构对齐平台前端：页面一律进 `src/features/<域>/page.tsx`，域内逻辑与页面同目录，
跨域共享的放 `src/lib/`；单测按域分在 `src/test/unit/<域>/`，浏览器用例在 `src/test/e2e/`。
后台菜单的动态路由按这个约定解析组件（`component: 'audit'` → `src/features/audit/page.tsx`）。

| 位置                                    | 约定                                                                 |
| --------------------------------------- | -------------------------------------------------------------------- |
| `src/App.tsx`                           | 新页面必须同时登记路由与菜单；受权限保护的页面套 `RequirePermission` |
| `src/app/navigation.ts`                 | 一级路由在 `navigation`，分组归属在 `navigationGroups`               |
| `src/app/app-layout.tsx`                | 外壳接线只做接线：菜单、顶栏操作、用户菜单、设置弹窗                 |
| `src/app/session.ts`                    | 演示会话；接真实身份服务时替换实现，保持 `AppSession` 形状           |
| `src/features/remote-menu/normalize.ts` | 后台菜单归一（纯逻辑），动态路由组件按 `features/<域>/page.tsx` 解析 |
| `src/lib/i18n.ts`                       | 先合并组件库的 `shellZh` / `shellEn`，本应用文案覆盖同名 key         |
| `src/lib/shortcuts.ts`                  | 默认快捷键登记表，传给 `UserSettings.shortcutDefaults`               |

## 3. 数据与演示

- `src/lib/sample-data.ts` 与 `src/features/notifications/store.ts` 里的内容是**演示数据**，接入真实接口时
  整体替换；不要在演示数据上继续堆业务逻辑。
- 通知、客户等页面的加载/空/错误/无权限四态必须齐；空状态用组件库的 `EmptyState`。
- 组件库的偏好（外观、无障碍、通知偏好）已经按浏览器持久化，应用不要重复存一份。

## 4. 验证

```bash
pnpm install
pnpm check      # format:check + typecheck + lint + 单测 + 生产构建
pnpm test:e2e   # Playwright：需要本地已装浏览器（pnpm exec playwright install chromium）
```

- 改外壳接线或页面结构时，同步更新 `src/test/e2e/console.spec.ts` 等用例，不要只改实现。
- 视觉与布局回归以 e2e 截图为准；jsdom 单测只覆盖纯逻辑。

## 5. 提交

中文 Conventional Commit，一个提交一个内聚目标；涉及组件库能力变更时，先在 `admin-ui` 提交并发版本，
再在本仓库升级依赖，两个提交都写清影响范围。
