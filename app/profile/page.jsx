"use client";

import Profile from "../../components/Profile.jsx";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/prompts`);
      const data = await response.json();
      setPrompts(data);
    };
    if (session?.user.id) {
      fetchPrompts();
      fetchPosts();
    }
  }, []);

  const handleEdit = (prompt) => {
    router.push(`/update-prompt?id=${prompt._id}`);
  };
  const handlePostEdit = (posts) => {
    router.push(`/update-post?id=${posts._id}`);
  };
  const handleDelete = async (prompt) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPrompts = prompts.filter((p) => p._id !== prompt._id);
        setPrompts(filteredPrompts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handlePostDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this Post?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/post/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const desc = `Welcome ${session?.user.name} to your personalised profile page`;

  return (
    <div>
      <Profile
        name="My"
        desc={desc}
        prompts={prompts}
        posts={posts}
        handleEdit={handleEdit}
        handlePostEdit={handlePostEdit}
        handleDelete={handleDelete}
        handlePostDelete={handlePostDelete}
      />
    </div>
  );
};

export default MyProfile;
