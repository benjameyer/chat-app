import { createContext, useContext, useState } from "react";

export const ConversationContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useConversationContext = () => {
  return useContext(ConversationContext);
}

export const ConversationContextProvider = ({ children }) => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);


  return <ConversationContext.Provider value={{ conversations, setConversations, selectedConversation, setSelectedConversation, messages, setMessages }}>
    {children}
  </ConversationContext.Provider>
};