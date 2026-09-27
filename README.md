# admin-react

Runlume **标准后台应用**：把组件库 `@runlume/admin-ui` 接成一个能跑的后台 —— 路由与菜单、会话与权限
接线、控制台外壳的使用方式，以及一批标准页面（工作台、客户、通知中心、系统设置、登录注册、组件展示）。

它是两件事：

1. 新业务系统的起点：用项目生成模板生成工程时，前端就是这套结构与页型的裁剪版。
2. 组件库的真实消费者：库缺什么能力，先在这里暴露出来，再到 `admin-ui` 补，然后升版本。

## 启动

```bash
pnpm install
pnpm dev            # http://localhost:5173
```

演示账号见 `src/app/session.ts`（`admin@runlume.local` 等），登录、注册、找回密码都是本地演示实现，
接入真实身份服务时替换 `src/app/session.ts` 与 `src/app/providers.tsx` 的接线即可。

## 依赖与本地联调

`package.json` 声明的是已发布的 `@runlume/admin-ui: ^0.3.0`。组件库还在本地改的时候，用
`pnpm-workspace.yaml` 里的 overrides 指向源码仓库：

```yaml
overrides:
  '@runlume/admin-ui': link:../admin-ui
```

改动组件库后执行 `cd ../admin-ui && pnpm build:lib`，应用这边重新 `pnpm dev` 就能看到新产物。
**发布 0.3.0 之后删掉这段 overrides**，安装即走注册表。

## 页面与接线

| 位置                       | 内容                                                           |
| -------------------------- | -------------------------------------------------------------- |
| `src/App.tsx`              | 路由表：登录、控制台、组件展示、远程菜单与 iframe 页           |
| `src/app/app-layout.tsx`   | 外壳接线：菜单分组、顶栏操作、用户菜单、设置弹窗、页面切换     |
| `src/app/navigation.ts`    | 本应用的菜单与分组（业务 / 系统 / 设计系统）                   |
| `src/app/session.ts`       | 演示会话与账号（真实项目替换为身份服务）                       |
| `src/pages/`               | 标准页面：工作台、客户、通知中心、系统设置、登录注册、组件展示 |
| `src/lib/i18n.ts`          | 语言包：合并组件库的 `shellZh` / `shellEn`，再叠加本应用文案   |
| `src/components/brand.tsx` | 品牌标识（组件库只接收 `brand` 节点，不绑定产品）              |

## 验证

```bash
pnpm check          # format:check + typecheck + lint + 单测 + 生产构建
pnpm test:e2e       # Playwright：控制台外壳、鉴权、通知与无障碍
pnpm verify         # 两者一起跑
```

## 协议

Apache-2.0，见 [LICENSE](LICENSE) 与 [NOTICE](NOTICE)。
