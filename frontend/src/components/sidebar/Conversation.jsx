import { useConversationContext } from "../../context/ConversationContext"


function Conversation({ conversation }) {
  const {selectedConversation, setSelectedConversation} = useConversationContext();


  const isSelected = selectedConversation?._id == conversation._id;
  return (
    <div className={`flex gap-3 items-center ${isSelected? "bg-info" : ""} active:bg-primary hover:bg-info p-2 py-2 cursor-pointer`}
      onClick={() => setSelectedConversation(conversation)}>

      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={`/users/profilePics/${conversation.otherParticipant.profilePic}`} alt="" />
        </div>
      </div>
      <div className="overflow-hidden">
        {conversation.otherParticipant.username}
      </div>

    </div>
  )
}

export default Conversation