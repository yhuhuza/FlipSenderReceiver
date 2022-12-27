import './index.scss';

const $app = document.querySelector('#app');

const html = `
  <div class='hello'>
    <div>
        Hello Dima!
    </div>
  </div>
`

$app.insertAdjacentHTML('beforeend', html);
