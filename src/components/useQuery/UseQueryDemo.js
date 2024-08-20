import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Button from '../custom/Button';

//TODO: learn how to do pagination with react-query

function UseQueryDemo() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: posts, error, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: getPostsData(),
    // staleTime is the time in milliseconds that the query will continue to return the cached data before making a new request
    // staleTime: 1000 * 4 , // 4 seconds
    // we can also use refetchInterval to refetch the data every 5 seconds
    // we can configure default values for these where we create the queryClient
    // refetchInterval: 1000 * 5, // 5 seconds
    // refetchOnWindowFocus: false, // true by default
    // retry: 3, // 3 retries allowed before giving up the fetch request
  });

  // const id = data.id
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: 'addPost',
    mutationFn: createPostRequest(),
    onSuccess: (newPost) => {
      // We can use the queryClient to invalidate the query cache so that the new post is fetched from the server
      // queryClient.invalidateQueries({ queryKey: ['posts'] });
      // Or we can use the queryClient to update the query cache so that the new post is added to the existing posts
      queryClient.setQueryData(['posts'], (oldPosts) => [...oldPosts, newPost]);
    },
    // enabled: !!id,
  });

  if (error || isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFetching) {
    return <div>Fetching...</div>;
  }

  return (
    <div style={{ padding: '10px', border: '1px solid' }}>
      <Button
        onClick={handleAddPost}
      >
        Add Post
      </Button>
      <Button
        onClick={refetch}
      >
        Search Again
      </Button>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
      {posts?.map((post) => (
        <div key={post.id} style={{ border: '1px solid' }}>
          {''}
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      <br />
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );

  function handleAddPost() {
      mutate({
        userId: 5000,
        id: 4000,
        title: 'Hello There! This is a new post created by the user using the useMutation hook',
        body: 'This is the body of the new post',
      });
  }
}

export default UseQueryDemo;

function createPostRequest() {
  return (newPost) =>
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    }).then((res) => res.json());
}

function getPostsData() {
  return () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    );
}
