import Posts from "../../components/Posts";

const Post = () => {
  return (
    <section className="w-100 h-auto flex-center flex-col">
      <h1 className="head_text text-center ">
        Posts
        <br className="max-md:hidden" />
        <span className="green_gradient text-2xl">
          Getting bored Read inspiriational Posts
        </span>
      </h1>
      <Posts />
    </section>
  );
};

export default Post;
