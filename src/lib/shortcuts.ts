/**
 * 应用登记的默认快捷键：`g d` 工作台、`g c` 客户、`g n` 通知、`g s` 设置。
 * 组件库只提供覆盖与保存机制，路由由应用自己登记。
 */
export const appShortcuts = [
  { combo: 'g d', path: '/', label: 'sample.navOverview' },
  { combo: 'g c', path: '/customers', label: 'sample.navCustomers' },
  { combo: 'g n', path: '/notifications', label: 'notifications.nav' },
  { combo: 'g s', path: '/settings', label: 'sample.navSettings' },
] as const
