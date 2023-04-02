import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const POST = [
  { id: 1, title: "Post1" },
  { id: 2, title: "Post2" },
];

function App() {
  const queryClient = useQueryClient();
  //console.log(POST.length);
  const postsQuery = useQuery({
    queryKey: ["posts"],
    // queryFn: () => Promise.reject("error message"),
    queryFn: () => wait(1000).then(() => [...POST]),
  });

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        POST.push({ id: crypto.randomUUID(), title })
      );
    },
    onSuccess: () => {
      // here we are invalidating the old posts query whenver on success we add a new post, so it will refetch the data
      //in the dev tools of react query, once we press add new , u can see it refetches the entire posts again
      queryClient.invalidateQueries(["posts"]);
    },
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  return (
    <div>
      {postsQuery.data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
      >
        Add New
      </button>
    </div>
  );
}

//function to slow down the loading instead of manually
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
