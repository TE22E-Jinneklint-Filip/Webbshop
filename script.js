function add(namn, pris) {
    // Hämta element
    const kundvagnLista = document.getElementById("kundvagns-lista");
    const SummaElement = document.getElementById("Summa");
    
    // Skapa element för produkten
    const produktElement = document.createElement("li");
    produktElement.textContent = namn + ": " + pris + " kr";
  
    // Lägg till produkt i listan
    kundvagnLista.appendChild(produktElement);

    // Uppdatera totalpriset
    const nySumma = parseInt(SummaElement.textContent) + pris;
    SummaElement.textContent = nySumma + " kr"; // Ändrade till SummaElement här

    // Kollar ifall det finns en tom array
    let KundvagnsObjekt = JSON.parse(localStorage.getItem("KundvagnsObjekt")) || [];
    
    // Lägger till information för array
    KundvagnsObjekt.push({ namn, pris });

    // Uppdaterar lokal storage med den nya kundvagnen
    localStorage.setItem("KundvagnsObjekt", JSON.stringify(KundvagnsObjekt));
}



window.onload = function () {
    const KundvagnsObjekt = JSON.parse(localStorage.getItem("KundvagnsObjekt")) || [];
  
    let totalSumma = 0; // Initiera totalSumma som 0.

    // Uppdaterar listan och total priset
    KundvagnsObjekt.forEach((item) => {
        const produktElement = document.createElement("li");
        produktElement.textContent = item.namn + ": " + item.pris + " kr";
        document.getElementById("kundvagns-lista").appendChild(produktElement);
  
        // Lägg till item.pris till totalSumma.
        totalSumma += parseInt(item.pris); // Se till att item.pris är en siffra.
    });

    const SummaElement = document.getElementById("Summa");
    // Uppdaterar SummaElement med den nya totalSumma och lägger till " kr".
    SummaElement.textContent = totalSumma + " kr";
};


document.getElementById("rensaknapp").addEventListener("click", function() {
    // Rensa innehållet i kundvagnslistan
    document.getElementById("kundvagns-lista").innerHTML = '';

    // Rensa totalpriset
    document.getElementById("Summa").textContent = '0 kr';

    // Rensa den lokala lagringen
    localStorage.removeItem("KundvagnsObjekt");
});
