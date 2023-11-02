import getUsers from '../actions/getUsers'
import Sidebar from '../components/sidebar/Sidebar'

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers()

  return (
    <Sidebar>
      <div className='h-full'>
        <UserList items={users} />
        {children}
      </div>
      ;
    </Sidebar>
  )
}

export default UsersLayout
