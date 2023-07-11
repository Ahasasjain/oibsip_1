function calc(event) {
    var char = '';
    var display = document.getElementById('display');

    if (event.type == 'click') {
      char = this.getAttribute('data-type');
    } else {
      if (event.keyCode === 13) {
        char = event.key;
        document.getElementById(char).style.background = '#f73b45';
      };
      if (event.keyCode === 27 || event.keyCode === 67) {
        char = 'C';
        document.getElementById(char).style.background = '#747274';
      };
      if (event.keyCode === 8) {
        char = event.key;
        document.getElementById(char).style.background = '#747274';
      };
      if (event.keyCode >= 96 && event.keyCode <= 111) {
        char = event.key;
        document.getElementById(char).style.background = '#4d4c4d';
      };
      
      if (char != '') setTimeout(function(){document.getElementById(char).removeAttribute('style');}, 200);
    };

    if (char === 'Enter') display.value = eval(display.value); 
      else if (char === 'C') display.value = '0';
        else {
          if (char === 'Backspace') {
            if (display.value.length > 1) display.value = display.value.slice(0,-1);
              else display.value = '0';
          } else if (char != '') {
            if (display.value === '0') display.value = '';
            if (char === ',') char = '.';
            if (checking(char)) display.value += char;  
          };
        };
  };

  function checking(char) {
    var display = document.getElementById('display'); 
    if (display.value.substr(-1) === '+' || display.value.substr(-1) === '-' ||
          display.value.substr(-1) === '*' || display.value.substr(-1) === '/' ||
            display.value.substr(-1) === '.') {
      if (char === '+' || char === '-' || char === '*' || char === '/' || char === '.') return false;
    };
    return true; 
  };

 
  function init() {
  	var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', calc);
    };
    window.onkeydown = calc;
  };
  window.onload = init;