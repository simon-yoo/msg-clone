import Sidebar from '@/app/components/sidebar/Sidebar'
import ConversationList from './components/ConversationList'

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Sidebar>
      <div className='h-full'>
        <ConversationList initialItems={[]} />
        {children}
      </div>
    </Sidebar>
  )
}
