window.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelectorAll('.carousel__inner_item'),
        left = document.querySelector('.carousel__inner-left'),
        right = document.querySelector('.carousel__inner-right'); 
        
  let slideIndex = 1;

  showSlide(slideIndex);

  function showSlide(n) {
    if (n > element.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = element.length;
    }

    element.forEach((item) => item.style.display = 'none');

    element[slideIndex - 1].style.display = 'block';
  }


  function plusSlide(n) {
    showSlide(slideIndex += n);
  }

  left.addEventListener('click', function() {
    plusSlide(-1);
  });

  right.addEventListener('click', function() {
    plusSlide(1);
  });

});