import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    senderId: {
      type: String,
      required: true,
    },
    receiverId: {
      type: String,
      required: true,
    },
    message: {
      text: {
        type:"String",
        default: ""
      },
      photo: {
        type:"String",
        default: ""
      },
      emo: {
        type: String,
        default: ""
      }
    },
    status: {
      type: String,
      enum: ["seen","sent"],
      default: "sent",
    },
    emoji: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: ""
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Chat", chatSchema);
