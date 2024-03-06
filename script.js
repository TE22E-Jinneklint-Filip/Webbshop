function add(namn, pris) {
    const kundvagnLista = document.getElementById("kundvagns-lista");
    const SummaElement = document.getElementById("Summa");
    
    const produktElement = document.createElement("li");
    produktElement.textContent = namn + ": " + pris + " kr";
  
    kundvagnLista.appendChild(produktElement);

    const nySumma = parseInt(SummaElement.textContent) + pris;
    SummaElement.textContent = nySumma + " kr";

    let KundvagnsObjekt = JSON.parse(localStorage.getItem("KundvagnsObjekt")) || [];
    
    KundvagnsObjekt.push({ namn, pris });

    localStorage.setItem("KundvagnsObjekt", JSON.stringify(KundvagnsObjekt));
}



window.onload = function () {
    const KundvagnsObjekt = JSON.parse(localStorage.getItem("KundvagnsObjekt")) || [];
  
    let totalSumma = 0;

        KundvagnsObjekt.forEach((item) => {
        const produktElement = document.createElement("li");
        produktElement.textContent = item.namn + ": " + item.pris + " kr";
        document.getElementById("kundvagns-lista").appendChild(produktElement);
  
        totalSumma += parseInt(item.pris);
    });

    const SummaElement = document.getElementById("Summa");
    SummaElement.textContent = totalSumma + " kr";
};


document.getElementById("rensaknapp").addEventListener("click", function() {
    document.getElementById("kundvagns-lista").innerHTML = '';

    document.getElementById("Summa").textContent = '0 kr';

    localStorage.removeItem("KundvagnsObjekt");
});
