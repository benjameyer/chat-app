import Conversation from "./Conversation"
import useGetConversations from "../../hooks/useGetConversations"

function Conversations() {

  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto h-96 scrollbar">
      {
        loading ?
        <span className="loading loading-spinner self-center"></span>
        :
        conversations.map((conversation) => {
          return <Conversation key={conversation._id} conversation={conversation} />
        })
      }
    </div>
  )
}

export default Conversations