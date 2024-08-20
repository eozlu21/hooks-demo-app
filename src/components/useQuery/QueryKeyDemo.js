import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Button from '../custom/Button';

// Mock API functions
const fetchUser = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
};

const fetchPosts = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

const fetchComments = async (postId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  if (!res.ok) throw new Error('Failed to fetch comments');
  return res.json();
};

function QueryKeyDemo() {
  const [userId, setUserId] = useState(1);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const queryClient = useQueryClient();

  const userQuery = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  const postsQuery = useQuery({
    queryKey: ['posts', userId],
    queryFn: () => fetchPosts(userId),
    enabled: !!userQuery.data,
  });

  const commentsQuery = useQuery({
    queryKey: ['comments', selectedPostId],
    queryFn: () => fetchComments(selectedPostId),
    enabled: !!selectedPostId,
  });

  const invalidateUserData = () => {
    queryClient.invalidateQueries(['user', userId]);
  };

  const invalidateAllUserRelatedData = () => {
    queryClient.invalidateQueries(['user', userId]);
    queryClient.invalidateQueries(['posts', userId]);
    if (selectedPostId) {
      queryClient.invalidateQueries(['comments', selectedPostId]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Query Key Demo</h1>
      
      <div>
        <Button onClick={() => setUserId((prev) => Math.max(1, prev - 1))}>Previous User</Button>
        <Button onClick={() => setUserId((prev) => prev + 1)}>Next User</Button>
        <Button onClick={invalidateUserData}>Invalidate User Data</Button>
        <Button onClick={invalidateAllUserRelatedData}>Invalidate All User Related Data</Button>
      </div>

      <h2>User Data</h2>
      {userQuery.isLoading ? (
        <p>Loading user...</p>
      ) : userQuery.isError ? (
        <p>Error: {userQuery.error.message}</p>
      ) : (
        <pre>{JSON.stringify(userQuery.data, null, 2)}</pre>
      )}

      <h2>User Posts</h2>
      {postsQuery.isLoading ? (
        <p>Loading posts...</p>
      ) : postsQuery.isError ? (
        <p>Error: {postsQuery.error.message}</p>
      ) : (
        <ul>
          {postsQuery.data?.map((post) => (
            <li key={post.id}>
              <Button onClick={() => setSelectedPostId(post.id)}>{post.title}</Button>
            </li>
          ))}
        </ul>
      )}

      {selectedPostId && (
        <>
          <h2>Comments for Post {selectedPostId}</h2>
          {commentsQuery.isLoading ? (
            <p>Loading comments...</p>
          ) : commentsQuery.isError ? (
            <p>Error: {commentsQuery.error.message}</p>
          ) : (
            <ul>
              {commentsQuery.data?.map((comment) => (
                <li key={comment.id}>{comment.name}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default QueryKeyDemo;