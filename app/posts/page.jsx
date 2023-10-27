import Posts from "../../components/Posts";

const Post = () => {
  return (
    <section className="w-50 h-auto flex-center flex-col">
      <h1 className="head_text ">
        Posts
        <br className="max-md:hidden" />
        <span className="violet_gradient ">
          Getting bored Read inspiriational Posts
        </span>
      </h1>
      <Posts />
    </section>
  );
};

export default Post;
