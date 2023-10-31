import Posts from "../../../../models/posts";
import { connectToDB } from "../../../../utils/database";

export const POST = async (req, res) => {
  const { userId, title, desc, date, image } = await req.json();

  try {
    await connectToDB();
    const newPost = new Posts({
      creator: userId,
      title,
      desc,
      date,
      image,
    });

    await newPost.save();

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Post", { status: 500 });
  }
};
