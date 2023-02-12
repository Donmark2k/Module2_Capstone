import './style.css';
import { movieUrl, url } from './modules/api.js';
import layout from './modules/homePageLayout';
import movieCount from './modules/movieCount.js';
import {fetchLike, newLike} from './modules/fetchlike.js';


const movies = async () => {
    const res = await fetch ( movieUrl );
    const data = await res.json();
    return data;
}

movies().then((movie) => {
    movie.map((each, index) => {
        layout(each);
        const wrapper = document.querySelector('.wrapper')
        const num = document.querySelectorAll('.total')
        // movieCount (wrapper , num) 
        const heart = document.querySelectorAll ('#heart')
        const card = document.querySelectorAll('.list');
         fetchLike(card)
         newLike ( heart, index, each.show.id);

        return each;
    })
})



const getId = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
      { method: 'post' });
    const data = await res.text();
    return data;
  };
  
  getId();
  