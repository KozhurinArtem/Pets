document.querySelector('.button-l').onmouseenter = () => {
    
    document.querySelector('.button-l').style.background = '#40a2d5';
    document.querySelector('.arrow--l').style.visibility = 'hidden';
    document.querySelector('.arrow--w-l').style.visibility = 'visible';

};

document.querySelector('.button-r').onmouseenter = () => {
   
    document.querySelector('.button-r').style.background = '#40a2d5';
    document.querySelector('.arrow--r').style.visibility = 'hidden';
    document.querySelector('.arrow--w-r').style.visibility = 'visible';

};

document.querySelector('.button-l').onmouseleave = () => {
   
    document.querySelector('.button-l').style.background = 'none';
    document.querySelector('.arrow--l').style.visibility = 'visible';
    document.querySelector('.arrow--w-l').style.visibility = 'hidden';

};

document.querySelector('.button-r').onmouseleave = () => {
   
    document.querySelector('.button-r').style.background = 'none';
    document.querySelector('.arrow--r').style.visibility = 'visible';
    document.querySelector('.arrow--w-r').style.visibility = 'hidden';
};


