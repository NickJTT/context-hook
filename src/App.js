import React from 'react';
import style from './App.module.css';
import ComponentC from './components/componentC/ComponentC';
import { UserProvider } from './context/UserContext';
import { ChannelProvider } from './context/ChannelContext';

function App() {
  return (
    <div className = { style.app }>
      <UserProvider value = { 'Nick' }>
        <ChannelProvider value = { 'Nick\'s Channel' }>
          <ComponentC/>
        </ChannelProvider>
      </UserProvider>
    </div>
  );
}

export default App;
