import { AboutPanel } from '@runlume/admin-ui/components/about-panel'
import { brandInfo } from '@/lib/brand-info'

/**
 * 「关于」内容：把本应用的品牌与仓库信息接到组件库的面板上。
 * 设置页与设置弹窗共用，避免两处文案漂移。
 */
export function AppAbout() {
  return (
    <AboutPanel
      title={`${brandInfo.product} 控制台`}
      description={`由 ${brandInfo.name} 标准后台生成：语义 Token、控制台外壳与标准页型来自 @runlume/admin-ui，业务页面在本仓库实现。`}
      brandName={brandInfo.name}
      brandUrl={brandInfo.site}
      docsUrl={brandInfo.sites.docs}
      repositoryUrl={brandInfo.repository}
    />
  )
}
