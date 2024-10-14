import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CounterPage from './CounterPage';
import TimerPage from './TimerPage';
import NavMenu from './NavMenu';
import PageNotFound from './PageNotFound';

function App() {
  console.log("App!", new Date().toString());

  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter/" element={<CounterPage />} />
          <Route path="/timer/" element={<TimerPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        &copy; 2024 Javascript 3 - Övning 5
      </footer>
    </>
  );
}

export default App;
