const Home = () => {
  return (
    <section className="w-full h-auto flex-center flex-col mt-10">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
      </h1>
      <span className="head_text violet_gradient text-center my-8 py-8 drop-shadow-md">
        AI generated content for fun and inspiration.
      </span>
      <br className="max-md:hidden" />
      <h2 className="text-center text-xl">
        <b>Promptizer:</b> Your Open-Source AI Prompting Tool for Endless
        Creative Discoveries. Discover millions of inspiring prompts for AI
        tools.
      </h2>
      <br className="max-md:hidden" />
      <h2 className="text-center text-xl mx-20 px-20">
        It helps you explore, create, and share creative prompts. With{" "}
        <b>Promptizer</b>, you can discover millions of inspiring prompts for AI
        tools like DALL-E 2, GPT-3, and Imagen. Write your own prompts and share
        them with the community. Collaborate with other users to create even
        more creative prompts. Learn from experts on how to write effective AI
        prompts. Whether you're a writer, artist, coder, or simply someone who
        loves to explore new ideas, it is the perfect tool for you.
      </h2>
      {/* Feed Component */}
    </section>
  );
};

export default Home;
