import mongoose from "mongoose";
import Channel from "../models/ChannelModel.js";
import User from "../models/UserModel.js";

export const createChannel = async (req, res, next) => {
    try {
        const { name, members } = req.body;
        const userId = req.userId;
        const admin = await User.findById(userId);

        if (!admin) {
            return res.status(404).send("User with the given id not found");
        }

        const validMembers = await User.find({ _id: { $in: members } });

        if (validMembers.length !== members.length) {
            return res.status(400).send("some members are not valid");
        }

        const newChannel = new Channel({
            name,
            members,
            admin: userId,
        });

        await newChannel.save();
        return res.status(201).json({ Channel: newChannel });

    } catch (error) {
        console.error({ error });
        return res.status(500).send("Internal Server Error");

    }
};



export const getUserChannels = async (req, res, next) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.userId);
        const channels = await Channel.find({
            $or: [
                { admin: userId },
                { members: userId }
            ]
        }).sort({ updatedAt: -1 });

        return res.status(200).json({ channels });

    } catch (error) {
        console.error({ error });
        return res.status(500).send("Internal Server Error");

    }
};




export const getChannelMessages = async (req, res, next) => {
    try {
        const { channelId } = req.params;
        const channel = await Channel.findById(channelId).populate({ path: "messages", populate: { path: "sender", select: "firstName lastName email _id image color" } });
        if (!channel) {
            return res.status(404).send("Channel with the given id not found");
        }
        const messages = channel.messages;
        return res.status(201).json({ messages });

    } catch (error) {
        console.error({ error });
        return res.status(500).send("Internal Server Error");

    }
};