// pages/profile.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://madireviewhub.onrender.com/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error(error);
        router.push('/login');
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };
  return (
    <Layout>
      <h1>{profile.name}</h1>
      <p>{profile.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </Layout>
  );
};

export default Profile;
