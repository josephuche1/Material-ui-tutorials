export type TBasicModalProps = {
    open: boolean
    onClose: () => void
    title: string
    subtitle: string
    content?: React.ReactNode
  }