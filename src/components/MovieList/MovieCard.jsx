import React from 'react'
import './MovieCard.css';
import Star from '../../assets/star.png'
const MovieCard = ({srcl,title,year}) => {   
  return (
   <a href="" className='movie_card'>
    <img src={srcl} alt="" className='movie_poster'/>
    <div className="movie_details">
        <h3 className="movie_details_heading">{title}</h3>
        <div className="align_center movie_date_rate">
            <p>{year}</p>
            <p>8.0 <img src={Star} alt="rating icon" className="card_emoji" /></p>
             <p className='movie_description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done       
             </p>
        </div>
    </div>
   </a>
  )
}

export default MovieCard;


//ca2ca60f2ad4042e1e6dc3d45f83a700