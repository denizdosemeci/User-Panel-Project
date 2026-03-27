import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserPosts = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = searchParams.get("userId");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Postlar yüklenirken hata:", err);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [userId]);

  if (loading) return <div className="loading-text">Yazılar yükleniyor... ✨</div>;

  return (
    <div className="page-card">
      <header className="detail-header">
        <button className="back-btn" onClick={() => navigate(`/users/${userId}`)}>
          ← Profile Dön
        </button>
      </header>

      <div className="posts-container">
        <h2>Kullanıcının Yazıları</h2>
        <ul className="posts-list">
          {posts.map((post, index) => (
            <li key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPosts;