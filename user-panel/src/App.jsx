import { Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
import Home from './pages/Home';
import Users from './pages/Users'; 
import UserDetail from './pages/UserDetail'; 
import UserPosts from './components/UserPost';


function App() {
  return (
    <div className="app-container">
      
      <aside className="sidebar">
        <h2>User Panel</h2>
        <nav>
          <ul>
            <li><Link to="/" className="nav-link">Dashboard</Link></li>
            <li><Link to="/users" className="nav-link">Users</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/posts" element={<UserPosts />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;