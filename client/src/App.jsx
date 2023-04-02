import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const POST = [
  { id: 1, title: "Post1" },
  { id: 2, title: "Post2" },
];

//understanding how queryKey works
function App() {
  const queryClient = useQueryClient();
  //console.log(POST.length);
  const postsQuery = useQuery({
    queryKey: ["posts"],
    // queryFn: () => Promise.reject("error message"),
    queryFn: () => wait(1000).then(() => [...POST]),
  });

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
