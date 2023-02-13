import './style.css';
import { movieUrl } from './modules/api.js';
import layout from './modules/homePageLayout.js';
import movieCount from './modules/movieCount.js';
import { fetchLike, newLike } from './modules/fetchlike.js';
import { commentForm, reserveForm } from './modules/popForm.js';
import { resLayout, listLayOut } from './modules/resCommentLayout.js';
import { fetchCommentApi, fetchResApi } from './modules/formApi.js';
import { addReserve, addComment } from './modules/addResComment.js';
import popUp from './modules/popUp.js';

const movies = async () => {
  const res = await fetch(movieUrl);
  const data = await res.json();
  return data;
};

movies().then((movie) => {
  movie.map((each, index) => {
    layout(each);
    const wrapper = document.querySelector('.wrapper');
    const num = document.querySelector('.total');
    movieCount(wrapper, num);
    const heart = document.querySelectorAll('#heart');
    const card = document.querySelectorAll('.list');
    fetchLike(card);
    newLike(heart, index, each.show.id);

    //  Calling comment Event listener from the comment button
    const comment = document.querySelectorAll('#comment');
    comment.forEach((com, ind) => {
      com.addEventListener('click', () => {
        if (index === ind) {
          const lists = [];
          popUp(each, 'comment');
          commentForm();
          fetchCommentApi(each.show.id, lists);

          // Collect form inputs
          const form = document.querySelector('form');
          const user = document.querySelector('#name');
          const text = document.querySelector('#text');
          const comsec = document.querySelector('.test');
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (user.value === '' || text.value === '') {
              return;
            }
            addComment(each.show.id, user.value, text.value);
            lists.push({ creation_date: 'few minutes ago', username: user.value, comment: text.value });
            comsec.innerHTML = '';
            lists.map((e) => listLayOut(e, comsec));
            form.reset();
            const header = document.querySelector('.head');
            const test = document.querySelector('.test');
            movieCount(test, header);
          });

          // Cancel the pop up icon
          const X = document.querySelector('.X');
          X.addEventListener('click', () => {
            const pop = document.querySelector('.pop');
            pop.remove();
            pop.innerHTML = '';
          });
        }
      });
    });
    // Reserve Event listeners start here
    const reserve = document.querySelectorAll('#reserve');
    reserve.forEach((res, ind) => {
      res.addEventListener('click', () => {
        if (index === ind) {
          const listr = [];
          popUp(each, 'reservation');
          reserveForm();
          // fetch api
          fetchResApi(each.show.id, listr);

          // add reservation
          const form = document.querySelector('form');
          const user = document.querySelector('#name');
          const sDate = document.querySelector('#start-date');
          const eDate = document.querySelector('#end-date');
          const comsec = document.querySelector('.test');

          form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (user.value === '' || sDate.value === '' || eDate === '') {
              return;
            }
            addReserve(each.show.id, user.value, sDate.value, eDate.value);
            listr.push({
              creation_date: 'few minutes ago', username: user.value, date_start: sDate.value, date_end: eDate.value,
            });
            comsec.innerHTML = '';
            listr.map((e) => resLayout(e, comsec));
            user.value = '';
            sDate.value = '';
            eDate.value = '';

            const header = document.querySelector('.head');
            const test = document.querySelector('.test');
            movieCount(test, header);
          });
          // to cancel the pop up
          const X = document.querySelector('.X');
          X.addEventListener('click', () => {
            const pop = document.querySelector('.pop');
            pop.remove();
            pop.innerrHTML = '';
          });
        }
      });
    });
    // Reserve end here
    return each;
  });
});

const getId = async () => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    { method: 'post' });
  const data = await res.text();
  return data;
};

getId();
