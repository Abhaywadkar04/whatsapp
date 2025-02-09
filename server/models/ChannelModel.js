import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    members: [{  
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  // ✅ Fixed
        required: true
    }],
    
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  // ✅ Fixed
        required: true
    },
    
    messages: [{  
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"  // Ensure "Message" is the correct model name
    }],

    createdAt: {
        type: Date,
        default: Date.now
    },
    
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware to update `updatedAt` before saving or updating
channelSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});
channelSchema.pre("findOneAndUpdate", function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

const Channel = mongoose.model("Channel", channelSchema);  // ✅ Ensure "Channel" is singular
export default Channel;
