import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Dummy user accounts
const DUMMY_USERS = [
  {
    id: 1,
    name: 'David Okafor',
    email: 'david@davidclothings.com',
    password: 'david123',
    avatar: 'DO',
    joinDate: 'January 2024',
    orders: 12,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'jane123',
    avatar: 'JS',
    joinDate: 'March 2024',
    orders: 4,
  },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const signIn = (email, password) => {
    setError('');
    const found = DUMMY_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) {
      const { password: _, ...safeUser } = found;
      setUser(safeUser);
      return { success: true };
    }
    setError('Invalid email or password.');
    return { success: false };
  };

  const createAccount = (name, email, password) => {
    setError('');
    const exists = DUMMY_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      setError('An account with this email already exists.');
      return { success: false };
    }
    // Simulate account creation
    const initials = name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const newUser = {
      id: Date.now(),
      name,
      email,
      avatar: initials,
      joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      orders: 0,
    };
    setUser(newUser);
    return { success: true };
  };

  const signOut = () => {
    setUser(null);
    setError('');
  };

  return (
    <AuthContext.Provider value={{ user, error, setError, signIn, createAccount, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
