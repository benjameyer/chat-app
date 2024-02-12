import Conversation from "../models/Conversation.js";

export const conversationController = {
    getConversations: async (req, res) => {
        try {
            const senderId = req.user._id;

            const conversations = await Conversation.find({
                participants: { $in: [senderId] }
            }).select('-messages');

            res.status(200).json(conversations);

        } catch (error) {
            console.log("Error in getConversations ", error.message);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}