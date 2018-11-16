document.querySelector('.hamburger-img').addEventListener('click', () => {
  let navigationStyle = document.querySelector('.navigation').style;
  if(!navigationStyle.display || navigationStyle.display === 'none') navigationStyle.display = 'grid';
  else navigationStyle.display = 'none';

});
