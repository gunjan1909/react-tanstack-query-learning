import { useQuery, useMutation } from "@tanstack/react-query";

const POST = [
  { id: 1, title: "Post1" },
  { id: 2, title: "Post2" },
];

function App() {
  console.log(POST.length);
  const postsQuery = useQuery({
    queryKey: ["posts"],
    // queryFn: () => Promise.reject("error message"),
    queryFn: () => wait(1000).then(() => [...POST]),
  });

  const newPost = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        POST.push({ id: crypto.randomUUID(), title })
      );
    },
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  return (
    <div>
      {postsQuery.data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
      <button onClick={() => newPost.mutate("New Post")}>Add New</button>
    </div>
  );
}

//function to slow down the loading instead of manually
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
