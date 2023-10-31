import Prompts from "../../components/Prompts";

const Prompt = () => {
  return (
    <section className="w-full h-auto flex-center flex-col ">
      <h1 className="head_text text-center">
        Prompts
        <br className="max-md:hidden" />
      </h1>
      <p className="pb-5 desc_text text-center violet_gradient sm:pt-5">
        Get instant and creative prompts here
      </p>
      <Prompts />
    </section>
  );
};

export default Prompt;
