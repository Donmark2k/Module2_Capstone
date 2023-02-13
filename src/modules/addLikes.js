const addLikes = (id) => {
  const add = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ow8CfEnAmZ2vrqFtriJY/likes',
      {
        method: 'post',
        body: JSON.stringify({ item_id: id }),
        headers: { 'content-type': 'application/json' },
      });
    const predata = res.text();
    return predata;
  };
  add();
};

export default addLikes;