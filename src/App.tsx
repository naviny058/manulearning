import './App.css'
import type { ReactElement } from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  interface AppRoute {
    path: string,
    element: ReactElement
  }
  const routes: AppRoute[] = [
    { path: "/", element: <Home /> },
    // { path: "/about", element: <About /> },
    // { path: "/fanta", element: <Fanta /> },
    // { path: "/cobalt", element: <Cobalt /> },
  ];
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default App
