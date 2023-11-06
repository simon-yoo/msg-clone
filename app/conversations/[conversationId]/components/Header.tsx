'use client'

import { Conversation, User } from '@prisma/client'

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
}
const Header: React.FC<HeaderProps> = ({ conversation }) => {
  return <div>Header</div>
}

export default Header
