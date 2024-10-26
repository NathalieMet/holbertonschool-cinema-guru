import './App.css';
import { useState, useEffect } from 'react';
import Dashboard from './routes/auth/Dashboard';
import Authentication from './routes/auth/Authentication';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      const fetchAuth = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/auth/', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error('Server response was not ok');
          }

          const result = await response.json();
          setIsLoggedIn(true);
          setUserUsername(result.username);

        } catch (error) {
          console.error("Erreur d'authentification :", error);
          setIsLoggedIn(false);
          localStorage.removeItem('accessToken');
        }
      };

      fetchAuth();
    }
  }, []);

return (
  <div className="App">
    {isLoggedIn ? (
      <Dashboard></Dashboard>
    ) : (
      <Authentication
      setIsLoggedIn={setIsLoggedIn}
      setUserUsername={setUserUsername}
      ></Authentication>
    )}
  </div>
);
}

export default App;
