import logo from './logo.svg';
import {useState,useEffect} from 'react';
import Book from './books.js';
import './App.css';
import './styles.css';
import axios from 'axios';
import books from './books.json'

function App() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    async function getData() {
      try{
      const response = await axios.get('./books.json');
      const json     = await response.data;
      setData(json);
      setLoaded(true);
      } catch (error) {
        console.log(error.message);
        console.log(error.request);
      }
    }
    getData();
  }, []);
  console.log('loaded:', loaded, 'data:',data);
  return(
  <>
    <div className="container">
      {loaded && data.books.map((book,i) => <Book data={book} key={i}/>)}
    </div>
  </>
  
  );
}

export default App;
