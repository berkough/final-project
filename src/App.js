import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/global/Navigation';
import Main from './pages/Main';
import Search from './pages/Search';
import Collection from './pages/Collection';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search' element={<Search />} />
      <Route path='/collection' element={<Collection />} />
    </Routes>
    </>
  );
}

export default App;
