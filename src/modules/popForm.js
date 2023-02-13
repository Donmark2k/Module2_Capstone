const commentForm = () => {
    const pup = document.querySelector('.pup');
    pup.innerHTML += ` <div class="addComment">
                  <h4>Add comment</h4>
                  <form class ="comment-form">
                  <input type="text" placeholder="your name" id="name">
                  <textarea name="" id="text" cols="30" rows="10" placeholder="your view"></textarea>
                  <button id="comment-btn">submit</button>
                </form>
              </div>`;
  };
  

const reserveForm = () => {
    const pup = document.querySelector('.pup');
    pup.innerHTML += ` <div class="addReserve">
                  <h4 class="reserve-h4">Add Reservation</h4>
                  <form class="res-form">
                  <input type="text" placeholder="your name" id="name" required>
                  <input id="start-date" type="date" placeholder="start date" required />
                  <input id="end-date" type="date" placeholder="end date" required />
  
                  <button class="reserve-btn">submit</button>
                </form>
              </div>`;
  };
  
  export  {commentForm,reserveForm};