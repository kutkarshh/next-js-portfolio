import Link from "next/link";
import Datepicker from "react-tailwindcss-datepicker";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const PostForm = ({ type, post, setPost, submitting, handleSubmit }) => {
  function getCurrentDate(separator = "") {
    let newDate = new Date().toLocaleDateString();
    let newTime = new Date().toLocaleTimeString();

    return `${newDate}  ${newTime}`;
  }

  const openWidget = () => {
    // create the widget

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "kutkarsh",
        uploadPreset: "upload",
      },
      (error, result) => {
        if (
          result.event === "success" &&
          result.info.resource_type === "image"
        ) {
          console.log(result.info.secure_url);

          setPost({
            ...post,
            date: getCurrentDate(),
            image: result.info.secure_url,
          });
        }
      }
    );
    widget.open(); // open up the widget after creation
  };

  return (
    <section className="w-full max-w-full flex-start gap-1 ">
      <div className="w-2/4">
        <h1 className="head_text">
          <span className="blue_gradient">{type} Post</span>
        </h1>
        <p className="text-white text-xl py-5 px-5 max-w-md">
          {type} and share amazing posts with the world, and let your
          imagination run wild with any AI-powered platform.
        </p>
      </div>

      <div className="w-3/4 ">
        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        >
          <label>
            <span className="font-satoshi font-semifold text-base text-gray-700">
              Title {` `}
              {/* <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span> */}
            </span>

            <input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Add some Title"
              required
              className="form_input"
            />
          </label>
          <label>
            <span className="font-satoshi font-semifold text-base text-gray-700">
              Your Post Description
            </span>

            <textarea
              value={post.desc}
              onChange={(e) => setPost({ ...post, desc: e.target.value })}
              placeholder="Write your Description here..."
              required
              className="form_textarea"
            />
          </label>
          {/* <label>
          <span className="font-satoshi font-semifold text-base text-gray-700">
            Date
          </span>

          <div>
            <Datepicker value="" onChange={() => {}} />
          </div>
        </label> */}

          {/* Image Uploader */}

          <div className="flex flex-row justify-center">
            <a className="black_btn w-10/12" onClick={openWidget}>
              Upload
            </a>
          </div>
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link
              href="/"
              className="text-black text-sm border px-5 py-1.5 rounded-full border-black bg-white"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              {submitting ? `${type}...` : type}
            </button>
          </div>
        </form>
      </div>

      {post.image ? (
        <div className="text-white text-xl text-center">
          <label className="mb-10">Image Preview</label>
          <Image
            id="upload_img"
            src={post?.image}
            width={600}
            height={600}
            className="rounded-sm"
            alt="profile"
          />
        </div>
      ) : (
        <>
          <label className="flex cursor-pointer flex-col w-2/4  border-2 rounded-md border-dashed ">
            <div
              className="flex flex-col  items-center justify-center justify-items-center"
              style={{ height: 700 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                Photo Preview
              </p>
            </div>
            <input type="button" className="opacity-0" onClick={openWidget} />
          </label>
        </>
      )}
    </section>
  );
};

export default PostForm;
