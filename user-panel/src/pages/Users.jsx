import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const userData = await axios.get('https://jsonplaceholder.typicode.com/users');
                setAllData(userData.data);
                setLoading(false)

            } catch (error) {
                console.error("Veri çekilirken hata oluştu:", error);
                setTimeout(() => {
        setLoading(false)
      }, 1000) 
            }
        }
        getData();
    }, []);

    const filteredUser = allData.filter((user) => {
        return user.name.includes(search) || user.username.includes(search);
    });

      if (loading) return <div className="loading-text">Loading... ✨</div>;

    return (
        
        <div className="page-card">
            <h1>Users List</h1>

            {/* Arama Kutusu */}
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input"
                    placeholder="Search user..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>

            {/* Kullanıcı Tablosu */}
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUser?.map((user, index) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.company.name}</td>
                            <td>
                                <button 
                                    className="detail-btn"
                                    onClick={() => navigate(`/users/${user.id}`)}
                                >
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;