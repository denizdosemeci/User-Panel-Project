import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import UserInfoCard from '../components/UserInfoCard';
import UserPosts from '../components/UserPost';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); 
  
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

        setUser(userRes.data);
        setPosts(postRes.data);

        setLoading(false);
      } catch (error) {
        console.error("Hata:", error);
        setLoading(false);
      } 
    };
    getData();
  }, [id]);

  if (loading) return <div className="loading-text">Loading... ✨</div>;
  if (!user) return <div className="page-card">Kullanıcı bulunamadı. 🌸</div>;

  return (
    <UserInfoCard user={user} navigate={navigate} />
  );
};

export default UserDetail;