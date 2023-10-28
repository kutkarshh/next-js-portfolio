"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import PostForm from "../../components/PostForm";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  // const [imagePublicId, setImagePublicId] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: "",
    desc: "",
    date: "",
    image: "",
  });

  const createPost = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    console.log(post);
    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          title: post.title,
          desc: post.desc,
          date: post.date,
          image: post.image,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PostForm
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;
