const listLayOut = (e, comsec) => {
    const temp = `${e.creation_date} ${e.username} : ${e.comment}`;
    const per = document.createElement ('li')
    per.innerHTML = temp;
    comsec.appendChild(per)
}

const resLayout = (e, comsec) => {
    const temp = `${e.date_start} -${e.date_end}  by ${e.username}`;
    const per = document.createElement('li');
    per.classList.add('per')
    per.innerHTML = temp;
    comsec.appendChild(per);
  };
  
  export  {resLayout, listLayOut};