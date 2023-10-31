import Post from "../../../../models/posts";
import { connectToDB } from "../../../../utils/database";

//GET (read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const post = await Post.findById(params.id).populate("creator");

    if (!post) return new Response("Post not found", { status: 404 });
    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all posts", {
      status: 500,
    });
  }
};

//Patch (update)
export const PATCH = async (request, { params }) => {
  const { title, desc, image } = await request.json();

  try {
    await connectToDB();

    const existingPrompt = await Post.findById(params.id);

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.title = title;
    existingPrompt.desc = desc;
    existingPrompt.image = image;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update Prompt", { status: 500 });
  }
};

//Delete (delete)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Post.findByIdAndRemove(params.id);

    return new Response("Prompt Deleted Successfully!!", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete Prompt", { status: 500 });
  }
};
