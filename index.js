
function toggleBurger(){
document.querySelector('.nav-list').classList.toggle('toggle__header');
if(document.querySelector('.nav-list').classList.contains('toggle__header')){
    document.querySelector('.header-info__wrapper').style.paddingTop = 132 + 'px' ;
}else{
    document.querySelector('.header-info__wrapper').style.paddingTop = 400 + 'px' ;
}

}

document.querySelector('.menu__wrapper').onclick = toggleBurger;

function removeImg(){
    let a = window.matchMedia("(max-width: 1260px)");
    if(a.matches){
        document.querySelector('.but__list').innerHTML = '<img src="/img/full-blob.svg" alt="full-blob" class="toggle-apearence">';
    }
   let b = window.matchMedia("(max-width: 742px)");
   console.log(b);
   if(b.matches){
    document.querySelector('.img__wrapper').innerHTML = ' <img src="/img/card-item-adaptive.png" alt="adaptive-review">';
    document.querySelector('.desktop__img').style.display = 'none';
   }
}
removeImg();