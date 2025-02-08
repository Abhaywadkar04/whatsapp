import Message  from "../models/MessagesModel.js";
export const getMessages = async (req, res, next) => {
    try {
        const user1 = req.userId;
        const user2 = req.body.id;
        if (user1 === undefined || user2 === null) {
            return res.status(400).send("both user id are required");
        }


        const message = await Message.find({
            $or: [{ sender: user1, recipient: user2 }, { sender: user2, recipient: user1 }]
        }).sort({ timestamp: 1 });
        return res.status(200).json({ message });
        // return res.status(200).send("logout successfully");
    } catch (error) {
        console.error({ error });
        return res.status(500).send("Internal Server Error");

    }
};