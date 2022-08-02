const form = document.getElementById("form")
const price = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;
form.addEventListener("submit", calculate)

function calculate(event){
    event.preventDefault();
    const kmInput = document.getElementById('km-input').value;
    const ageInput = document.getElementById('age-input').value;
    const p = document.getElementById('output');
    
    // console.log(kmInput);
    // console.log(ageInput);
    let prezzoBiglietto = kmInput * price;

    if(ageInput<18){
       let prezzoBigliettoMinorenni = prezzoBiglietto - (prezzoBiglietto * scontoMinorenni)/100;
       p.innerHTML = "Kilometers: " + kmInput + " Age: " + ageInput + " Discount: " + scontoOver65 + "%" + " Price: " +  prezzoBigliettoMinorenni + "€";
    } else if (ageInput>65){
        let prezzoBigliettoOver65 = prezzoBiglietto - (prezzoBiglietto * scontoOver65)/100;
        p.innerHTML = "Kilometers: " + kmInput + " Age: " + ageInput + " Discount: " + scontoOver65 + "%" + " Price: " +  prezzoBigliettoOver65 + "€";
    } else {
        p.innerHTML = "Kilometers: " + kmInput + " Age: " + ageInput + " Price: " +  prezzoBiglietto + "€";
    }
}