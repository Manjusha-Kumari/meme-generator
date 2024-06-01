import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/home';
import EditPage from './pages/edit';

function App() {
  return (
    <div className="row">
      <h1>Meme Genarator</h1>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/edit' element={<EditPage />} />
      </Routes>
    </div>
  );
};

export default App;
