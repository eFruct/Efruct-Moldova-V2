

document.addEventListener('DOMContentLoaded', function() {
   
    const path = window.location.pathname;
    const page = path.split("/").pop();

        var buyButton = document.querySelector('.button-pag-produse');
        if (buyButton) {
            buyButton.addEventListener('click', function(event) {
                event.preventDefault();
                var productName = document.querySelector('h1').textContent;
                var message = encodeURIComponent("Doresc să cumpăr de la întreprinderea Efruct " + productName);
                window.location.href = 'contacte.html?message=' + message;
            });
        }
     if (page === 'contacte.html') {
       
        const queryParams = new URLSearchParams(window.location.search);
        const message = queryParams.get('message');
        if (message) {
            const textArea = document.getElementById('text-area');
            if (textArea) {
                textArea.value = decodeURIComponent(message.replace(/\+/g, ' '));
            }
        } else {
            console.log('No message received.');
        }
    }
});




document.addEventListener('DOMContentLoaded', function() {
    console.log('Query string:', window.location.search); 
    const queryParams = new URLSearchParams(window.location.search);
    const message = queryParams.get('message');
    console.log('Extracted message:', message);  

    if (message) {
        const textArea = document.getElementById('text-area');
        if (textArea) {
            textArea.value = decodeURIComponent(message.replace(/\+/g, ' '));
        }
    } else {
        console.log('No message received.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
   
    if (document.getElementById('text-area')) {
        const queryParams = new URLSearchParams(window.location.search);
        const message = queryParams.get('message');
        if (message) {
            document.getElementById('text-area').value = decodeURIComponent(message.replace(/\+/g, ' '));
        } else {
            console.log('No message received.');
        }
    }

   
    if (document.querySelector('.button-pag-produse')) {
        document.querySelector('.button-pag-produse').addEventListener('click', function(e) {
            e.preventDefault();
            const productName = document.getElementById('content-pag-produse').querySelector('h1').textContent;
            const message = encodeURIComponent("Bună ziua, doresc să cumpăr de la întreprinderea Efruct " + productName);
            window.location.href = 'contacte.html?message=' + message;
        });
    }
});

