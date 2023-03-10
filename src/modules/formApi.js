import { listLayOut, resLayout } from './resCommentLayout.js';

const fetchCommentApi = (dataid, arr) => {
  const id = dataid;
  const comres = async () => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cXyK0mK0Ha1BkQqOi8Kz/comments?item_id=${id}`);
    const data = await res.json();
    return data;
  };
  comres().then((each) => {
    const comsec = document.querySelector('.test');
    arr.push(...arr, ...each);
    each.map((e) => {
      listLayOut(e, comsec);
      const header = document.querySelector('.head');
      header.innerHTML = `${each.length}`;
      return e;
    });
  });
};

const fetchResApi = (dataid, arr) => {
  const id = dataid;

  const comres = async () => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cXyK0mK0Ha1BkQqOi8Kz/reservations?item_id=${id}`);
    const data = await res.json();
    return data;
  };
  comres().then((each) => {
    const comsec = document.querySelector('.test');
    arr.push(...arr, ...each);
    each.map((e) => {
      resLayout(e, comsec);
      const header = document.querySelector('.head');
      header.innerHTML = `${each.length}`;
      return e;
    });
  });
};

export { fetchCommentApi, fetchResApi };
