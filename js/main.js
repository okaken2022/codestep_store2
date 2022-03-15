'use strict';

{
  const mask = document.getElementById('mask');

  const span1 = document.querySelectorAll('span')[0];
  const span2 = document.querySelectorAll('span')[1];
  const ham = document.getElementById('toggle-btn');
  const hamMenu = document.getElementById('product-list')

  //ハンバーガーメニューアイコンを押した際の動き
  ham.addEventListener('click', () => {

    mask.classList.toggle('open');
    span1.classList.toggle('open');
    span2.classList.toggle('open');
    hamMenu.classList.toggle('open');
  
  });

  //maskをクリックしても閉じるようにする
  mask.addEventListener('click', () => {

    mask.classList.toggle('open');
    span1.classList.toggle('open');
    span2.classList.toggle('open');
    hamMenu.classList.toggle('open');

  });

}