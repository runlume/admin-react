import type { ColumnDef } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { DataTable } from '@runlume/admin-ui/components/data-table'
import { PageHeader } from '@runlume/admin-ui/components/page'
import { auditLogs, type AuditLog } from '@/lib/sample-data'

/**
 * 操作日志：后台菜单里带 `example.admin.audit.view` 才可见；没有权限的用户直接访问这里会落到 403。
 */
export function AuditPage() {
  const { t } = useTranslation()
  const columns: ColumnDef<AuditLog>[] = [
    { accessorKey: 'createdAt', header: t('sample.auditTime'), size: 180 },
    { accessorKey: 'action', header: t('sample.auditAction'), size: 180 },
    { accessorKey: 'operator', header: t('sample.auditOperator'), size: 120 },
    { accessorKey: 'target', header: t('sample.auditTarget'), size: 240 },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Audit"
        title={t('sample.auditTitle')}
        description={t('sample.auditDescription')}
      />
      <DataTable
        data={auditLogs}
        columns={columns}
        caption={t('sample.auditTitle')}
        sortable
        storageId="audit"
      />
    </>
  )
}
