'use client'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return <div>Modal</div>
}

export default Modal
