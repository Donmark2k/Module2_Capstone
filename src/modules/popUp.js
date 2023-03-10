const popUp = (data, section) => {
  const main = document.querySelector('main');
  const temp = `
              <div class="pup">
                  <div class="X">
                      <i class="fa-solid fa-x"></i>
                  </div>
                <div id="img-summary" class = ident>
                  <div class="image popup-image">
                      <img src=${data.show.image.original} alt="">
                  </div> 
                  <div class="name-summary">  
                   <h3> ${data.show.name}</h3>
                  <p>${data.show.summary}</p>
                  </div>
  
              </div>
  
              <div class="comment">
                  <h4>${section}(<span class="head"></span>)</h4>
                  <ul class="test list-test-reserve">
                  
                  </ul>
              </div>
              </div>
          `;
  const pop = document.createElement('div');
  pop.classList.add('pop');
  pop.setAttribute('data-id', data.show.id);
  pop.innerHTML = temp;
  main.appendChild(pop);
};

export default popUp;