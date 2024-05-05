function mobileMenu() {
    var x = document.getElementsByTagName("navbar")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}

function mobileMenuRefresh() {
    var x = document.getElementsByTagName("navbar")[0]; // Am modificat selectorul pentru a selecta elementul "nav"
    if (x.className === "mobile") { // Am modificat clasa din "" în "mobile"
      x.className = ""; // Am eliminat adăugarea clasei "mobile"
    }
  }

// inceput script schimbator tema

function toggleTheme() {
    var theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "css/light.css") {
     theme.href = "css/dark.css";
    } else {
     theme.href = "css/light.css";
    }
   }

  // sfarsit script schimbator tema

//   scroll smooth <
document.documentElement.style.scrollBehavior = 'smooth';
//   scroll smooth >

//  script ascunde navbar <

var prevScrollPos = window.pageYOffset;

 window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0.5rem"; 
      } else {
        document.getElementById("header").style.top = "-100px"; 
      }

      prevScrollPos = currentScrollPos; 
    }

//   script ascunde navbar >

// inceput script faq
const buttons = document.querySelectorAll('.intrebare-faq button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
// sfarsit script faq

// animatii <
AOS.init();
// animatii />

// div bara cautare <
document.getElementById("bara_cautare").addEventListener("focus", function() {
  document.getElementById("div-bara-cautare").style.display = "block";
});

document.getElementById("bara_cautare").addEventListener("blur", function() {
  document.getElementById("div-bara-cautare").style.display = "block";
});
// div bara cautare >

// script bara cautare <
document.querySelector('#bara_cautare').oninput = function () {
  let val = this.value.trim().toLowerCase(); 
  let bara_cautareItems = document.querySelectorAll('.bara_cautare li');
  if (val === '') { 
      bara_cautareItems.forEach(function (elem) {
          elem.style.display = 'none'; 
      });
  } else {
      bara_cautareItems.forEach(function (elem) {
          let text = elem.innerText.toLowerCase(); 
          if (text.includes(val)) { 
              elem.style.display = 'block'; 
              let index = text.indexOf(val); 
              let markedText = elem.innerText.substring(0, index) + '' + elem.innerText.substring(index, index + val.length) + '' + elem.innerText.substring(index + val.length);
              elem.innerHTML = markedText;
          } else {
              elem.style.display = 'none'; 
          }
      });
  }
};
// script bara de cautare >

window.addEventListener('beforeunload', function() {
 
  var input = document.getElementById('bara_cautare');
 
  input.value = '';
});


window.addEventListener('scroll', function() {
  var divBaraCautare = document.getElementById('div-bara-cautare');
  var isBaraCautareVisible = window.getComputedStyle(divBaraCautare).display !== 'none';
  if (isBaraCautareVisible) {
      divBaraCautare.style.display = 'none';
  }
});


document.getElementById('bara_cautare').addEventListener('click', function() {
  var divBaraCautare = document.getElementById('div-bara-cautare');
  divBaraCautare.style.display = 'block';
});








