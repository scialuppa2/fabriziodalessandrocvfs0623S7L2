//Esercizio 1

// Funzione per salvare il valore in localStorage
function saveValue() {
    let nomeInput = document.getElementById('name').value;
    localStorage.setItem('userName', nomeInput);
    displayName();
    resetInput();
}
document.getElementById('saveName').addEventListener('click', saveValue);

// Funzione per rimuovere il valore da localStorage
function removeValue() {
    localStorage.removeItem('userName');
    displayName();
}
document.getElementById('removeName').addEventListener('click', removeValue);


// Funzione per mostrare il nome salvato sopra l'input field
function displayName() {
    let nomeSalvatoSpan = document.getElementById('nomeSalvato');
    let nomeSalvato = localStorage.getItem('userName');
    nomeSalvatoSpan.textContent = nomeSalvato || 'Nessun nome salvato';
}
//Funzione per resettare l'input field
function resetInput() {
    document.getElementById('name').value = '';
}

// Mostra sempre il nome precedentemente salvato
displayName();




//Esercizio 2

// Funzione per incrementare il contatore
function updateCounter() {
    let counterElement = document.getElementById('counter');
    let counterValue = sessionStorage.getItem('counter') || 0;
    counterValue++;
    sessionStorage.setItem('counter', counterValue);
    counterElement.textContent = counterValue;
}

// Funzione per aggiornare il contatore ogni secondo
function startCounter() {
    updateCounter();
    setInterval(updateCounter, 1000);
}

// Avvia la funzione startCounter al caricamento della pagina
window.addEventListener('load', startCounter);