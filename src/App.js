import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {useState, useEffect} from 'react';
function App() {
  const [favoriteList,SetFavList] = useState([]);
  const fetchData = async () => {
    try{
      const res = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
  
      const data = await res.json();
      SetFavList(data);
  
    }catch (error) {
      console.log("error", error);
    }
  
  }
  
  
    useEffect(() => {
      fetchData();
    } , []);
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
