const layout = (array) => {
  const wrapper = document.querySelector('.wrapper');
  const template = `
    <div class="desc article">
    <div class="img">
          <img src=${array.show.image.medium}>
    </div>
     <div class="name"> <p> ${array.show.name}</p> </div>
     <div class="like-row">
     <p> <i class="fa-solid fa-heart" id="heart"></i> </p>
     <p class="likes">    <span class='like'>0</span> likes</p>
    </div>
    <div class="button-row">
    <button id="comment" data-id = ${array.show.id}>comment</button>
    <button id="reserve" data-id = ${array.show.id}> reservation</button>   </div> </div>
    
    `;

  const list = document.createElement('li');
  list.setAttribute('data-id', array.show.id);
  list.classList.add('list');
  list.innerHTML = template;
  wrapper.appendChild(list);
};

export default layout;