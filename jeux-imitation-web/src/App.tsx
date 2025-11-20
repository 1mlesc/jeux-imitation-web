//src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import { useState } from 'react';
import type { User } from './services/User';

function App() {

  const [user, setUser] = useState<User | null>(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home setUser={setUser} user={user} />} />
      </Routes>
    </Router>
  )
}

export default App
