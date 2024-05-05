function mobileMenu() {
  var x = document.getElementsByTagName("navbar")[0];
  if (x.className === "") {
      x.className += "mobile";
  } else {
      x.className = "";
  }
}

function mobileMenuRefresh() {
  var x = document.getElementsByTagName("navbar")[0]; 
  if (x.className === "mobile") { 
    x.className = "";
  }
}
// inceput script schimbator tema

function toggleTheme() {
    var theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "../css/light.css") {
     theme.href = "../css/dark.css";
    } else {
     theme.href = "../css/light.css";
    }
   }

  // sfarsit script schimbator tema

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

  // script redec pe pag contacte <
  document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.querySelector('.button-pag-produse');
    buyButton.addEventListener('click', function(e) {
        e.preventDefault();  
        const productName = document.getElementById('content-pag-produse').querySelector('h1').textContent;
        const message = encodeURIComponent("Doresc să cumpăr de la întreprinderea Efruct " + productName);
        window.location.href = 'contacte.html?message=' + message;
    });
});

  // script redec pe pag contacte >