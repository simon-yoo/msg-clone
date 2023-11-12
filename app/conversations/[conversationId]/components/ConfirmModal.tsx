'use client'

import { useRouter } from 'next/navigation'

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter()

  return <div>ConfirmModal</div>
}

export default ConfirmModal
