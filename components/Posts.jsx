"use client";

import PostCard from "./PostCard";

import { useEffect, useState } from "react";

const Posts = () => {
  const [searchText, setSearchText] = useState("");
  //   const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/post");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const PostCardList = ({ data, handlePostClick }) => {
    return (
      <div className="mt-10 flex flex-col gap-5">
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handlePostClick={handlePostClick}
          />
        ))}
      </div>
    );
  };

  //   const filterPrompts = (searchText) => {
  //     const regex = new RegExp(searchText, "i");

  //     return posts.filter(
  //       (item) =>
  //         regex.test(item.creator.username) ||
  //         regex.test(item.tag) ||
  //         regex.test(item.prompt)
  //     );
  //   };

  //   const handleSearchChange = (e) => {
  //     clearTimeout(searchTimeout);
  //     setSearchText(e.target.value);

  //     //debounce method
  //     setSearchTimeout(
  //       setTimeout(() => {
  //         const searchResult = filterPrompts(e.target.value);
  //         setSearchedResults(searchResult);
  //       }, 500)
  //     );
  //   };

  const handlePostClick = (tagName) => {
    // setSearchText(tagName);
    // const searchResult = filterPrompts(tagName);
    // setSearchedResults(searchResult);
    console.log("Post clicked", newDate);
  };

  return (
    <section className="post_feed">
      {/* All Posts */}
      {searchText ? (
        <PostCardList
          data={searchedResults}
          handlePostClick={handlePostClick}
        />
      ) : (
        <PostCardList data={posts} handlePostClick={handlePostClick} />
      )}
    </section>
  );
};

export default Posts;
