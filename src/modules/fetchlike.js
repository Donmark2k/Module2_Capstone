import addLikes from './addLikes.js';
// import { movieUrl, url } from './modules/api.js';


const fetchLike = (ep) => {
    ep.forEach ((e) => {
        const likes = async () => {
            const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8t6g73PoMQ4PoGggqL1h/likes');
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


const newLike = (heart, index , id) => {
    heart.forEach((heat, inde) => {
        heat.addEventListener ('click', () => {
            if(inde === index) {
                addLikes ();
                const parent = heat.parentElement.parentElement.parentElement;
                const eachLike = parent.querySelector('.like')
                const eachInText = eachLike.innerText
                const increase = parseInt(eachInText, 10)+ 1;
                eachLike.innerText = increase;
            }
        })
    })
}

export  {fetchLike, newLike};
