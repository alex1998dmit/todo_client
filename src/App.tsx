import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme';
import TodosPage from './components/pages/Todos';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodosPage />
    </ThemeProvider>
  );
}

export default App;
