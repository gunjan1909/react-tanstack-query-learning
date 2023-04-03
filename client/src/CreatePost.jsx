import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { createPost } from "./api/posts";
import Post from "./Post";
import "./CreatePost.css";

export default function CreatePost({ setCurrentPage }) {
  const titleRef = useRef();
  const bodyRef = useRef();
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (
      data
      //,variables,context
    ) => {
      //manually updating the cache and on
      //["posts", id], data it will update to cache so when we create
      //and go the that posts page, it will be rendered
      queryClient.setQueryData(["posts", data.id], data);

      //on creating the post, we invalidate the old data into stale state so it refetch
      queryClient.invalidateQueries(
        ["posts"],
        //more arguments to not invalidate other data items with key as posts, to avoid the sideeffect, else it refetch every and mark as stale everytime
        { exact: true }
      );
      setCurrentPage(<Post id={data.id} />);
    },
  });

  //createPostMutation.data;
  // createPostMutation.status==="error"||"idle" ||"loading"|| "success" ||

  function handleSubmit(e) {
    e.preventDefault();
    createPostMutation.mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
    });
  }

  return (
    <div>
      {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input id="body" ref={bodyRef} />
        </div>
        <button disabled={createPostMutation.isLoading}>
          {createPostMutation.isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
}
