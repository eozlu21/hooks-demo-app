import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../custom/Button';

const fetchPosts = async (page, perPage) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * perPage}&_limit=${perPage}`
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

function PaginationDemo() {
  const [paginationState, setPaginationState] = useState({ page: 1, perPage: 5 });
  const navigate = useNavigate();

  const { data, error, isLoading, isError, isFetching } = useQuery({
    queryKey: ['posts', paginationState.page, paginationState.perPage],
    queryFn: () => fetchPosts(paginationState.page, paginationState.perPage),
    keepPreviousData: true,
  });

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ padding: '10px', border: '1px solid' }}>
      <h1>Posts</h1>
      {data?.map((post) => (
        <div key={post.id} style={{ border: '1px solid', margin: '10px 0' }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      <div style={{ marginTop: '10px' }}>
        <Button 
          onClick={() => setPaginationState(prev => ({ ...prev, page: Math.max(prev.page - 1, 1) }))} 
          disabled={paginationState.page === 1}
        >
          Previous Page
        </Button>
        <span style={{ margin: '0 10px' }}>Page {paginationState.page}</span>
        <Button 
          onClick={() => setPaginationState(prev => ({ ...prev, page: prev.page + 1 }))}
        >
          Next Page
        </Button>
        {isFetching && <span> Loading...</span>}
      </div>
      <br />
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
}

export default PaginationDemo;