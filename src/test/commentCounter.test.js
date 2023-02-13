/**
 * @jest-environment jsdom
*/
import movieCount from '../modules/movieCount.js';
import { listLayOut } from '../modules/resCommentLayout.js';

describe('Test for comment counter', () => {
  document.body.innerHTML = `
    <div class="comment">
    
    <h4 class="head">comment()</h4>
    <ul class="test list-test-reserve">
    </ul>
    </div>`;
  const list = [
    { creation_date: 'few minutes ago', username: 'olaide', comment: 'Hello World' },
    { creation_date: 'few minutes ago', username: 'olaide', comment: 'Hello World' },
    { creation_date: 'few minutes ago', username: 'olaide', comment: 'Hello World' },
    { creation_date: 'few minutes ago', username: 'olaide', comment: 'Hello World' },
  ];
  const tfee = document.querySelector('.test');
  const head = document.querySelector('.head');

  test('Test the number of element in homepage', () => {
    expect(movieCount(tfee, head)).toHaveLength(0);
  });

  test('Test should return the number of comments in the UI after adding to comments', () => {
    list.map((lists) => {
      listLayOut(lists, tfee);
      return list;
    });
    expect(movieCount(tfee, head)).toHaveLength(4);
  });
});