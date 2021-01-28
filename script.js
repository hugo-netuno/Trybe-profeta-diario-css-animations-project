var myVar;

const articleAnimation = document.getElementsByTagName('article');

const add = (element) => {element.classList.add('article-animation');}

const remove = (element) => {element.classList.remove('article-animation');}
function myFunction(element){
  myVar = setTimeout(remove, 4001, element);

}

const called = (element) => {
  add(element);
  
  myFunction(element);
}

for (let i = 0; i < articleAnimation.length; i += 1) {
  articleAnimation[i].addEventListener('click', () => {
    called(articleAnimation[i]);
  });
}
