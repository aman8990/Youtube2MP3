const btn = document.querySelector('.btn');
const apiLink = 'https://api.vevioz.com/apis/button/mp3?url=';

btn.addEventListener('click', function (event) {
  event.preventDefault();

  const link = document.getElementById('inputText').value;
  console.log(apiLink + link);
  window.open(apiLink + link, '_blank');
});
