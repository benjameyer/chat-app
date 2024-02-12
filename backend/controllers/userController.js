import User from "../models/User.js";

export const userController = {
    searchUsers: async (req, res) => {
        try {
            const search = new RegExp(`.*${req.query.searchUsers}.*`);

            const usersFound = await User.find({ username: { $regex: search } }).select("-password");

            res.status(200).json(usersFound);

        } catch (error) {
            console.log("Error in getUsers ", error.message);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}