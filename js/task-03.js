const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.querySelector('.gallery');
// console.log(listRef);
const makeGalerryEL = image => {
  const { url, alt } = image;
  return `<li class = "gallery-item"><img src = "${url}" alt = "${alt}" width = "200" height = "150"/> </li>`;
};
const makeGallerryList = images.map(makeGalerryEL).join('');

listRef.insertAdjacentHTML('beforeend', makeGallerryList);

const justifyContent = 'justify-content';
const listStyle = 'list-style';

listRef.style.display = 'flex';
listRef.style.listStyle = 'none';
listRef.style.justifyContent = 'space-evenly';
listRef.style.padding = '0px';
listRef.style.margin = '0px';
