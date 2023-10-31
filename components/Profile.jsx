import PostCard from "./PostCard";
import PromptCard from "./PromptCard";

const Profile = ({
  name,
  desc,
  prompts,
  posts,
  handleEdit,
  handlePostEdit,
  handleDelete,
  handlePostDelete,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text_left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold font-satoshi">Prompts</h2>
        <div className="prompt_layout">
          {prompts &&
            prompts.map((prompt) => (
              <PromptCard
                key={prompt._id}
                post={prompt}
                handleEdit={() => handleEdit && handleEdit(prompt)}
                handleDelete={() => handleDelete && handleDelete(prompt)}
              />
            ))}
        </div>
      </div>
      <div className="flex gap-5 mb-10">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handlePostEdit={() => handlePostEdit && handlePostEdit(post)}
            handlePostDelete={() => handlePostDelete && handlePostDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
