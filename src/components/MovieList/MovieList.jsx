import React,{useEffect,useState} from 'react'
import Fire from '../../assets/fire.png';
import "./MovieList.css";
import MovieCard from './MovieCard';
const MovieList = () => {

const [data,setData] = useState([]);
const [miniRating,setMiniRating] = useState()
    useEffect(()=>{

        fetch('http://www.omdbapi.com/?&apikey=7ad95122&s&s="titanic"')
        .then((res)=>{
            console.log(res)
            return res.json(); 
        })
        .then((data) => {
            setData(data.Search)
        })
    

    },[])

  
console.log(data)

  return (
    <section className='movie_list'>
<header className=' align_center movie_list_header'>
    <h2 className="align_center movie_list_heading">Popular<img src={Fire} alt="fire emoji" className="navbar_emoji"/></h2>
    <div className=' align_center movie_list_fs'>
        <ul className='align_center movie_filter'>
            <li className='movie_filter_item active'>8+ Star</li>
            <li className='movie_filter_item'>7+ Star</li>
            <li className='movie_filter_item'>6+ Star</li>

        </ul>
        <select name="" id="" className="movie_sorting">
            <option value="">Sortby</option>
            <option value="">Date</option>
            <option value="">Rating</option>
        </select>
        <select className="movie_sorting">
             <option value=''>Ascending</option>
             <option value='desc'>Descending</option>
        </select>
    </div>
    </header>
    <div className="movie_cards">
        {data.map((item)=>{
            console.log(item.Poster)
            return  <MovieCard key={item.imdbID} srcl={item.Poster} title={item.Title} year={item.Year}/>
        })}
        
    </div>
    </section>
  )
}

export default MovieList
