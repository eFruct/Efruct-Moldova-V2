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

  //script alerta trimitere <<
  var form = document.getElementById("formular");
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(form),
    }).then(
        response => response.json()
    ).then((html) => {
        form.reset();
        alert('Datele au fost transmise!');
    });
  });
   //script alerta trimitere >>

   // script redec  <
   document.addEventListener('DOMContentLoaded', function() {
   
    const produse = document.querySelectorAll('.produs');

   
    produse.forEach(function(produs) {
        produs.addEventListener('click', function() {
            
            const link = produs.getAttribute('data-link');

          
            window.location.href = link;
        });
    });
});

   // script redec  >


  