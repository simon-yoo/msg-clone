interface IParams {
  conversatoinId: string
}

const ConversationId = async ({ params }: { params: IParams }) => {
  return <div>conversation ID!</div>
}
export default ConversationId
