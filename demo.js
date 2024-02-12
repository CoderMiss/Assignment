document.addEventListener("DOMContentLoaded", function() {
    const expandableBox = document.querySelector('.expandable-box');
    expandableBox.addEventListener('click', function() {
      this.classList.toggle('expanded');
    });
  });
  