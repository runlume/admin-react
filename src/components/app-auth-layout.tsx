import type { ReactNode } from 'react'
import { AuthLayout } from '@runlume/admin-ui/components/auth-layout'
import { Brand } from './brand'
import { brandInfo } from '@/lib/brand-info'

/** 未登录页外壳：把本应用的品牌与仓库接到组件库的标准页型上。 */
export function AppAuthLayout({ children }: { children: ReactNode }) {
  return (
    <AuthLayout
      brand={<Brand className="w-36" />}
      brandUrl={brandInfo.site}
      brandLabel="runlume.app"
      repositoryUrl={brandInfo.repository}
      footerLabel="RUNLUME ADMIN DESIGN"
    >
      {children}
    </AuthLayout>
  )
}
