import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import RepositoryList from './components/git/repository/RepositoryList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
