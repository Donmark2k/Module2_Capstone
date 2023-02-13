/**
 * @jest-environment jsdom
*/
import movieCount from '../modules/movieCount.js';
import { resLayout, listLayOut } from '../modules/resCommentLayout.js';

describe('Tests for reservation counter', () => {
  document.body.innerHTML = `

            <div class="comment">
                <h4 class="head">comment()</h4>
                <ul class="test list-test-reserve">
                
                </ul>
            </div>
                `;

  const list = [
    {
      creation_date: 'few minutes ago', username: 'microverse', date_start: 1 - 1 - 2023, date_end: 1 - 1 - 24,
    },
    {
      creation_date: 'few minutes ago', username: 'microverse', date_start: 1 - 1 - 2023, date_end: 1 - 1 - 24,
    },
    {
      creation_date: 'few minutes ago', username: 'microverse', date_start: 1 - 1 - 2023, date_end: 1 - 1 - 24,
    },
    {
      creation_date: 'few minutes ago', username: 'microverse', date_start: 1 - 1 - 2023, date_end: 1 - 1 - 24,
    },
  ];

  const tfee = document.querySelector('.test');
  const head = document.querySelector('.head');

  test('test the number of element in UI ', () => {
    expect(movieCount(tfee, head)).toHaveLength(0);
  });

  test('Should return the number of reservations in the UI after adding to reservation', () => {
    list.map((lists) => {
      listLayOut(lists, tfee);
      return list;
    });
    expect(movieCount(tfee, head)).toHaveLength(4);
  });
});