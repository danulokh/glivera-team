// top_close

const closeTopIcon = document.querySelector('.top-information__close'),
      topBlock = document.querySelector('.top-information');
closeTopIcon.addEventListener('click', () => {
    topBlock.classList.add('top-information__none');
});

const menu = document.querySelector('.menu-navbar__list'),
      hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu-navbar__list_active');
});


  if(window.innerWidth <=  991){
    const menuFadeParent = document.querySelectorAll('.menu-navbar__link');

      for(let i = 0; i<menuFadeParent.length; i++){
        let subMenu= menuFadeParent[i].nextElementSibling;
        if(subMenu != null){
          menuFadeParent[i].addEventListener('click', () => {
              if(subMenu.style.display == 'block'){
                subMenu.style.display = 'none';
                
              } else{
                subMenu.style.display = 'block';
                
              }
              
            });
        }   
      } 
  } 
  
  const menuFade = document.querySelector('.menu');

  window.addEventListener('scroll', () => {
    if(window.scrollY > 160){
      menuFade.classList.add('menu-fade');
    } else {
      menuFade.classList.remove('menu-fade');
    }
  });




  



    
   
    

    
    
    

