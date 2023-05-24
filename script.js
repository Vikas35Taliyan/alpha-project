document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    var formOffsetTop = form.offsetTop;
    var windowHeight = window.innerHeight;
    var formVisible = false;
  
    function showFormOnScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (!formVisible && scrollTop > (formOffsetTop - windowHeight)) {
        form.style.opacity = 1;
        form.style.transform = "translateY(0)";
        formVisible = true;
      }
    }
  
    window.addEventListener("scroll", showFormOnScroll);
  });
  