(function () {
  "use strict";
  // animation aos 
  AOS.init({
    easing: "ease-in-out",
    duration: 600,
    delay: 0,
    once: true
  });
  // nav-menu a click
  document.querySelectorAll(".navmenu a").forEach(link => {
    link.addEventListener("click", function (event) {
      //remove class active
      document.querySelectorAll(".navmenu a").forEach(item => {
        item.classList.remove("active");
      });
      //add class active
      this.classList.add("active");
    });
  });
  //mobile-nav toggle 
  const mobileNavToggleBtn = document.querySelector(".mobile-nav")
  function mobileNavToggle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  if (document.querySelector(".mobile-nav")) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  /**
   * Hide Mobile Nav Toggle
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  })

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top")
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
    };
  }
  scrollTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * FAQ Toggle
   */
  document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", function (e) {
      this.classList.toggle("faq-active");
    });
  })
})();