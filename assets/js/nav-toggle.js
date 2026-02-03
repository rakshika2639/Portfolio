// Mobile navigation hamburger toggle
(function(){
  function initNavToggle(){
    const hamburger = document.getElementById('hamburger-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const logo = document.querySelector('.logo');
    if(!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', function(e){
      e.stopPropagation();
      navMenu.classList.toggle('nav-open');
      if(logo) logo.classList.toggle('logo-open');
    });
    
    // Close menu when clicking on a nav link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(){
        navMenu.classList.remove('nav-open');
        if(logo) logo.classList.remove('logo-open');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(){
      navMenu.classList.remove('nav-open');
      if(logo) logo.classList.remove('logo-open');
    });
  }
  
  // Run when DOM is ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initNavToggle);
  } else {
    initNavToggle();
  }
})();
