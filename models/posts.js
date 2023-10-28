import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Description is required."],
  },
  desc: {
    type: String,
    required: [true, "Description is required."],
  },
  date: {
    type: String,
    required: [true, "Date is required."],
  },
  image: {
    type: String,
  },
});

const Post = models.Post || model("Post", PostSchema);
export default Post;
