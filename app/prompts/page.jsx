import Prompts from "../../components/Prompts";

const Prompt = () => {
  return (
    <section className="w-full h-auto flex-center flex-col ">
      <h1 className="head_text text-center">
        Prompts
        <br className="max-md:hidden" />
        <span className="violet_gradient text-5xl">
          Get instant and creative prompts here
        </span>
      </h1>
      <Prompts />
    </section>
  );
};

export default Prompt;
