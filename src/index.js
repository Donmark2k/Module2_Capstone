import './style.css';
import { movieUrl, url } from './modules/api.js';
import layout from './modules/homePageLayout';
import movieCount from './modules/movieCount.js';
import {fetchLike, newLike} from './modules/fetchlike.js';
import { commentForm, reserveForm} from './modules/popForm.js';
import {resLayout, listLayOut} from './modules/resCommentLayout.js';
import  {fetchCommentApi, fetchResApi} from './modules/formApi.js';
import addComment from './modules/addResComment.js';
import popUp from './modules/popUp.js';

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
        movieCount (wrapper , num) 
        const heart = document.querySelectorAll ('#heart')
        const card = document.querySelectorAll('.list');
         fetchLike(card)
         newLike ( heart, index, each.show.id);

        //  Calling comment Event listener from the comment button
        const comment = document.querySelectorAll('#comment')
        comment.forEach((com, ind) => {
            com.addEventListener('click', () => {
                if (index === ind) {
                    const lists = [];
                    popUp(each, 'comment');
                    commentForm();
                    fetchCommentApi(each.show.id, lists)

                // Collect form inputs
                const form = document.querySelector('form');
                const user = document.querySelector('#name');
                const text = document.querySelector('#text');
                const comsec = document.querySelector('.test');
                form.addEventListener('submit', (e)=>{
                    e.preventDefault();
                    if (user.value ===''|| text.value === '') {
                        return
                    }
                    addComment(each.show.id, user.value, text.value)
                    lists.push ({ creation_date: 'few minutes ago', username: user.value, comment: text.value});
                    comsec.innerHTML ='';
                    lists.map((e)=> listLayOut(e, comsec));
                    form.reset();
                    const header = document.querySelector('.head');
                    const test = document.querySelector('.test')
                     movieCount(test, header)
                });

                // Cancel the pop up icon
                const X = document.querySelector('.X');
                X.addEventListener('click', ()=> {
                    const pop = document.querySelector('.pop')
                    pop.remove();
                    pop.innerHTML = '';
                })

                }
            })
        })

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
  