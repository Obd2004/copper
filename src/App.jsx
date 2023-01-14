import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Cards from './Components/pages/News/Cards/Cards';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='cards' element={<Cards/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
