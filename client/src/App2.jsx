/*import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const POST = [
  { id: 1, title: "Post1" },
  { id: 2, title: "Post2" },
];

// /posts->["posts"]
// /posts/1->["posts",post.id]
// /posts?authorId=1->["posts",{authorId:1}}]
// /posts/2/comments-> ["posts", post.id, "comments"]

//understanding how queryKey works
function App() {
  const queryClient = useQueryClient();
  //console.log(POST.length);
  const postsQuery = useQuery({
    queryKey: ["posts"],
    // queryFn: () => Promise.reject("error message"),
    queryFn: (obj) =>
      wait(500).then(() => {
        //console.log(obj);
        return [...POST];
      }),
  });
  // console.log(postsQuery);
  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <div>
      {postsQuery.data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
}

//function to slow down the loading instead of manually
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
*/
