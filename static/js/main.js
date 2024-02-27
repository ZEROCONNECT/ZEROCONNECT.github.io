console.log("main.js");

document.addEventListener('DOMContentLoaded', function() {
  
  
  document.addEventListener('keydown', function(event) {

      if (event.key === ' ') {
        console.log("sapce bar")
        
    }
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          event.preventDefault();
          const checkedIndex = Array.from(optionRadios).findIndex(radio => radio.checked);
          let nextIndex;
          if (event.key === 'ArrowUp') {
              nextIndex = (checkedIndex - 1 + optionRadios.length) % optionRadios.length;
          } else {
              nextIndex = (checkedIndex + 1) % optionRadios.length;
          }
          optionRadios[nextIndex].checked = true;
          optionRadios[nextIndex].focus();
      }
  });

    document.querySelector('.press-start-text').addEventListener('click', function(event) {
        document.querySelector('.game_options_div').hidden = block;
        document.querySelector('.press-start-text').style.display = 'None';
        document.querySelector('.game_options_div').focus();
    });
  
});