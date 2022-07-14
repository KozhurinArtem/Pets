window.addEventListener('DOMContentLoaded', () => {

 let dot = document.querySelector('.menudot');

    var btns = document.querySelectorAll('.menu__list')
    // Проходим по массиву
    btns.forEach(function(btn) {
      // Вешаем событие клик
      btn.addEventListener('click', function(e) {
        dot.style.opacity = '1';
      })
    })


    // menu.addEventListener('click', e => {
    //     console.dir(e.target)
    // }) 











document.querySelector('.button-l').onmouseenter = () => {
    
    document.querySelector('.button-l').style.background = '#40a2d5';
    document.querySelector('.arrow--l').style.opacity = '0';
    document.querySelector('.arrow--w-l').style.opacity = '1';

};

document.querySelector('.button-r').onmouseenter = () => {
   
    document.querySelector('.button-r').style.background = '#40a2d5';
    document.querySelector('.arrow--r').style.opacity = '0';
    document.querySelector('.arrow--w-r').style.opacity = '1';

};

document.querySelector('.button-l').onmouseleave = () => {
   
    document.querySelector('.button-l').style.background = 'none';
    document.querySelector('.arrow--l').style.opacity = '1';
    document.querySelector('.arrow--w-l').style.opacity = '0';

};

document.querySelector('.button-r').onmouseleave = () => {
   
    document.querySelector('.button-r').style.background = 'none';
    document.querySelector('.arrow--r').style.opacity = '1';
    document.querySelector('.arrow--w-r').style.opacity = '0';
};

})

