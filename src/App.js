import logo from './logo.svg';
import './App.css';
import AddStud from './components/AddStud';
import SearchStud from './components/SearchStud';
import Deletestud from './components/Deletestud';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStud/>}/>
      <Route path='/search' element={<SearchStud/>}/>
      <Route path='/delete' element={<Deletestud/>}/>
      <Route path='/view' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
