window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__element'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader');

    function hideTabContent() {
        tabsContent.forEach(i => {
            i.style.display = 'none';
        });

        tabs.forEach(i => {
            i.classList.remove('tabheader__element--active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'grid';
        tabs[i].classList.add('tabheader__element--active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if ( target && target.classList.contains('tabheader__element')){
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    




});
