import { useState } from "react";
import Post from "./Post";
import PostsList1 from "./PostsList1";
import PostsList2 from "./PostsList2";
import CreatePost from "./CreatePost";
import { PostListPaginated } from "./PostListPaginated";
import { PostListInfinite } from "./PostListInfinite";
import { useQueryClient } from "@tanstack/react-query";
import { getPost } from "./api/posts";
export default function App() {
  const queryClient = useQueryClient;
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);

  //when we hover, it will prefetch/prepopulate the data in the cache

  //didnt worked
  function onHoverPostOneLink() {
    queryClient.prefetchQuery({
      queryKey: ["posts", 1],
      queryFn: () => getPost(1),
    });
  }

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts List 2
      </button>
      <button
        onMouseEnter={onHoverPostOneLink}
        onClick={() => setCurrentPage(<Post id={1} />)}
      >
        First Post
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        New Post
      </button>
      <button onClick={() => setCurrentPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostListInfinite />)}>
        Post List Infinite
      </button>
      <br />
      {currentPage}
    </div>
  );
}
