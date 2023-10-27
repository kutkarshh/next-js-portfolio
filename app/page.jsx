import Feed from "../components/Feed";

const Home = () => {
  return (
    <section className="w-full h-auto flex-center flex-col mt-10">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="violet_gradient text-center">
          AI generated content for fun and inspiration.
        </span>
      </h1>
      <p className="desc text-center">
        Promptizer: Your Open-Source AI Prompting Tool for Endless Creative
        Discoveries. Discover millions of inspiring prompts for AI tools.
      </p>
      {/* that
        helps you explore, create, and share creative prompts. With Promptizer,
        you can: Discover millions of inspiring prompts for AI tools like DALL-E
        2, GPT-3, and Imagen. Write your own prompts and share them with the
        community. Collaborate with other users to create even more creative
        prompts. Learn from experts on how to write effective AI prompts.
        Whether you're a writer, artist, coder, or simply someone who loves to
        explore new ideas, Promptizer is the perfect tool for you. */}
      {/* Feed Component */}
      <Feed />
    </section>
  );
};

export default Home;
