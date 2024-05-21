import React from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import moviesData from './movies.json';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
       { moviesData.map((element,index) => (
          <Movies 
          key={index}
            title={element.Title} 
            year={element.Year} 
            img={element.Poster} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
