"use client";

import { Image } from "cloudinary-react";
import { useState } from "react";
// import tick from "../public/assets/icons/tick.svg";
// import copy from "../public/assets/icons/copy.svg";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import moment from "moment";
const PostCard = ({
  post,
  handlePostClick,
  handlePostEdit,
  handlePostDelete,
}) => {
  const [copied, setCopied] = useState("");

  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const date = new Date(post.date);
  const newDate = moment(date).format("LLL");

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id) return router.push("/profile");
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  // const handleCopy = () => {
  //   setCopied(post.prompt);
  //   navigator.clipboard.writeText(post.prompt);
  //   setTimeout(() => setCopied(""), 3000);
  // };

  return (
    <div className="post_card flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <label
          className="font-satoshi text-sm cursor-pointer text-left"
          onClick={() => handlePostClick && handlePostClick(post.desc)}
        >
          <label className="font-bold my-10 text-xl blue_gradient cursor-pointer">
            {post.title}
          </label>
          <br />
          {post.desc}
          <br />
        </label>
        <Image
          src={post.image}
          alt="post_image"
          // width="full"
          // height="200"
          style={{ width: "full", height: 350 }}
          className="rounded-sm object-contain cursor-pointer"
        />
      </div>
      <div>
        <div className="flex justify-between gap-5">
          <div
            className="flex-1 flex justify-start items-center  gap-3 cursor-pointer"
            onClick={handleProfileClick}
          >
            <Image
              src={post.creator.image}
              alt="user_image"
              width={36}
              height={36}
              className="rounded-full object-contain"
            />

            <div className="flex flex-col items-start">
              <h6 className="font-satoshi font-semibold text-gray-900">
                {post.creator.username}
              </h6>
              <p className="font-inter text-xs text-gray-900">
                {post.creator.email}
              </p>
            </div>
          </div>
          {/* <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? tick : copy}
            width={12}
            height={12}
            alt="copy_btn"
          />
        </div> */}
          <label className="font-semibold text-xs font-satoshi my-auto">
            {newDate}
          </label>
        </div>
      </div>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 mb-2 flex-center gap-4 border border-gray-100 py-3 bg-white/50 rounded-md ">
          <p
            className="font-inter text-sm green_gradient cursor-pointer hover:text-black"
            onClick={handlePostEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer hover:text-black"
            onClick={handlePostDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
