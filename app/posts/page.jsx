import Posts from "../../components/Posts";

const Post = () => {
  return (
    <section className="w-100 h-auto flex-center text-center flex-col">
      <div className="flex-col">
        <h1 className="head_text">
          Posts
          <br className="max-md:hidden" />
        </h1>
        <h3 className="pb-5 desc_text text-center green_gradient text-2xl">
          Getting bored Read inspiriational Posts
        </h3>
      </div>
      <Posts />
    </section>
  );
};

export default Post;
