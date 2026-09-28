import type { ReactNode } from 'react'
import type { TOptions } from 'i18next'
import { useTranslation } from 'react-i18next'
import { AdminUiProvider, type UiTranslate } from '@runlume/admin-ui'
import { ThemeProvider } from '@runlume/admin-ui/components/theme-provider'
import { TooltipProvider } from '@runlume/admin-ui/ui/tooltip'
import { Toaster } from '@runlume/admin-ui/ui/sonner'
import '@/lib/i18n'

/** 主题、文案、提示与浮层 Provider。业务系统新增全局 Provider 时叠加在这里。 */
export function Providers({ children }: { children: ReactNode }) {
  const { t, i18n } = useTranslation()
  // 公共组件取自 @runlume/admin-ui，用本应用自己的 i18n 提供文案：
  // 不挂这一层时，库内文案（日期范围占位、可编辑表格按钮等）会回落到英文 key。
  const translate: UiTranslate = (key, options) => t(key, options as TOptions)
  return (
    <AdminUiProvider language={i18n.language} translate={translate}>
      <ThemeProvider>
        {/* 提示延迟 300ms：过短容易误触，过长会显得没响应。 */}
        <TooltipProvider delayDuration={300}>
          {children}
          <Toaster position="top-right" closeButton />
        </TooltipProvider>
      </ThemeProvider>
    </AdminUiProvider>
  )
}
