import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import { useState } from 'react';
import Search from './Search';
import Add from './Add'
import{Route, Routes,route} from 'react-router-dom'
import Trailer from './Trailer';



function App() {
  const[keyword,setKeyword]=useState('')
  const[rating,setRating]=useState(1)
  const[movies,setMovies]= useState([

    { id:1,
        main_img:
          "https://fr.web.img5.acsta.net/c_310_420/pictures/23/03/07/10/22/0062410.jpg",
        second_img:
          "https://www.apple.com/tv-pr/shows-and-films/g/ghosted/images/show-home-graphic-header/key-art-01/4x1/ATV_Ghosted_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1679921867918",
      title:"Ghosted",
      duration:"154min",
      date:"2023",
      rate:5,
      genre:"action , romance",
      description:"Ghosted est un film réalisé par Dexter Fletcher avec Ana de Armas", 
      trailer:"https://www.youtube.com/watch?v=IAdCsNtEuBU"
    },

    { id:2,
      main_img:
        "https://fr.web.img6.acsta.net/pictures/23/02/10/10/56/3228985.jpg",
      second_img:
        "https://www.justgeek.fr/wp-content/uploads/2022/10/creed-3-film-bande-annonce-550x309.jpg",
    title:"creed 3",
    duration:"140min",
    date:"2023",
    rate:4,
    genre:"sport , drame",
    description:"Synopsis. Idole de la boxe et entouré de sa famille, Adonis Creed n'a plus rien à prouver", 
  },

  { id:3,
    main_img:
      "https://fr.web.img6.acsta.net/pictures/23/01/20/12/15/5780701.jpg",
    second_img:
      "https://static.standard.co.uk/2023/01/19/16/scream6.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
  title:"scream 6",
  duration:"130min",
  date:"2023",
  rate:5,
  genre:"horreur",
  description:"One year after the Woodsboro killings orchestrated by Richie Kirsch and Amber Freeman,", 
},
  
  ])
  const getData=(keyword)=>{
    setKeyword(keyword)
  }
  const getRate=(rate)=>{
    setRating(rate)
  }
  const handleAdd = (newMovie)=>{
    setMovies([...movies,newMovie]);
  }
  return (
    <div className="App">
    <Search getData={getData} getRate={getRate}/>
    <Add handleAdd={handleAdd} />

    <Routes>
    <Route path="/" element={<MovieList  movies={movies.filter((el)=> el.rate >= rating &&
      el.title.toLowerCase().includes(keyword.trim().toLocaleLowerCase()))} />}/>
      <Route path="/movie/:id" element={<Trailer movie={movies}/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
