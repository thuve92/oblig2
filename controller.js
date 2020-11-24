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