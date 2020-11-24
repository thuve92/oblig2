 // hjelpevariable for både view og controller
 var contentDiv = document.getElementById('content');

 // model
 let numbers = [7, 3, 1, 5, 8];
 let chosenBar = 'Ingen Valgt!'; // Variabel for hvilken stolpe som er valgt
 let inputValue; // Variabel for hva som er skrevet i input-feltet
 let barNo;
 let stroke = '';
 let enableButton = 'disabled';


 // view
 show();
 function show() {
     let svgInnerHtml = '';
     for (let i = 0; i < numbers.length; i++) {
         svgInnerHtml += createBar(numbers[i], i + 1);
     }
     contentDiv.innerHTML = `
         <svg id="chart" width="500" viewBox="0 0 80 60">
             ${svgInnerHtml}
         </svg><br/>
         Valgt stolpe: <i>${chosenBar}</i>
         <br />
         Verdi:
         <input type="number" min="1" max="10" oninput="inputValue = this.value" />
         <button onclick="createNewBar()">Legg til stolpe</button>
         <button ${enableButton} onclick="changeBar()">Endre valgt stolpe</button><br />
         <button ${enableButton} onclick="removeBar()">Fjerne valgt stolpe</button>
         `;
 }

 function createBar(number, barNo) {
     const width = 8;
     const spacing = 2;
     let x = (barNo - 1) * (width + spacing);
     let height = number * 10;
     let y = 60 - height;
     let color = calcColor(1, 10, barNo);
     stroke = barNo === chosenBar ? 'stroke: black' : '';
     return `<rect style= "${stroke}" onclick="chooseBar(${barNo})" width="${width}" height="${height}"
                         x="${x}" y="${y}" fill="${color}"></rect>`;
 }

 function calcColor(min, max, val) {
     var minHue = 240, maxHue = 0;
     var curPercent = (val - min) / (max - min);
     var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
     return colString;
 }

 // controller (Nå er det noe her :D!)

 function createNewBar() {
    if(inputValue < 1 || inputValue > 10) {
        alert('Kan ikke legge til tallet 0, eller over 10!');
    }else {
        numbers.push(inputValue);
    };
    show();
    }

 function chooseBar(barNo) {
    // chosenBar = barNo === chosenBar ? 'Ingen valgt!' : barNo;
    if(chosenBar === barNo) {
        chosenBar = 'Ingen valgt!';
        enableButton = 'disabled';
    } else {
        chosenBar = barNo;
        enableButton = '';
    }
    show();
 }

 function removeBar() {
    numbers.splice(chosenBar - 1, 1);
    enableButton = 'disabled';
    chosenBar = 'Ingen valgt!';
   
    show();
}

function changeBar() {
    if(inputValue >= 1 && inputValue <= 10) {
        numbers.splice(chosenBar - 1, 1, parseInt(inputValue));
    } else if(inputValue > 10 || inputValue < 1) {
        alert('Tallet må være i mellom 1-10');
    };
 show();
}




