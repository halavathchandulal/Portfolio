var typed = new Typed('.text', {
    strings: ['Frontend Developer', 'Web Developer', 'WebSite Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  var link=document.getElementById("link-btn2")
  
  function handelLinks(){
    link.addEventListener('click', function() {
      window.open("./Chandu.pdf","_self")
    });
  }
  handelLinks()