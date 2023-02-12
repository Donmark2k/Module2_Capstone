import addLikes from './addLikes.js';
// import { movieUrl, url } from './modules/api.js';


const fetchLike = (ep) => {
    ep.forEach ((e) => {
        const likes = async () => {
            const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ow8CfEnAmZ2vrqFtriJY/likes');
            const predata = res.json()
            return predata;
        };
    likes().then((data) => {
        data.forEach((dat)=> {
            if (parseInt(e.dataset.id, 10) === dat.item_id) {
                const like = e.querySelector('.like')
                like.innerText = dat.likes
            }
        })
    }) 
    })
}


const newLike = (heart, index, id) => {
    heart.forEach((heat, inde) => {
      heat.addEventListener('click', () => {
        if (inde === index) {
          addLikes(id);
          const parent = heat.parentElement.parentElement.parentElement;
          const eachlike = parent.querySelector('.like');
          const eachIntext = eachlike.innerText;
          const increase = parseInt(eachIntext, 10) + 1;
          eachlike.innerText = increase;
        }
      });
    });
  };

export  {fetchLike, newLike};
