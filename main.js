// Write your JavaScript here
function doTheMath(tendered, amtDue) {
    let weOwe = (tendered - amtDue).toFixed(2);
    return weOwe;
};

function handleClickEvent(e) {
    e.preventDefault();
    let amtDue = document.getElementById("amount-due").value;
    let tendered = document.getElementById("amount-received").value;
    let result = doTheMath(tendered, amtDue);
    let cents = result * 100;


    if (cents > 1999) {
        let twenties = Math.floor(cents / 2000);
        cents = cents % 2000;
        document.getElementById('twenties-output').innerHTML = twenties;
    } else if (cents < 1999) {
        let twenties = Math.floor(cents / 2000);
        cents = cents % 2000;
        document.getElementById('twenties-output').innerHTML = '0'
    }

    if (cents > 999) {
        let tens = Math.floor(cents / 1000);
        cents = cents % 1000;
        document.getElementById('tens-output').innerHTML = tens;
    } else if (cents < 999) {
        let tens = Math.floor(cents / 1000);
        cents = cents % 1000;
        document.getElementById('tens-output').innerHTML = '0';
    }

    if (cents > 499) {
        let fives = Math.floor(cents / 500);
        cents = cents % 500;
        document.getElementById('fives-output').innerHTML = fives;
    } else if (cents < 499) {
        let fives = Math.floor(cents / 500);
        cents = cents % 500;
        document.getElementById('fives-output').innerHTML = '0';
    }

    if (cents > 99) {
        let dollars = Math.floor(cents / 100);
        cents = cents % 100;
        document.getElementById("dollars-output").innerHTML = dollars;
    } else if (cents < 99) {
        let dollars = Math.floor(cents / 100);
        cents = cents % 100;
        document.getElementById("dollars-output").innerHTML = '0';
    };

    if (cents > 24) {
        let quarters = Math.floor(cents / 25);
        cents = cents % 25;
        document.getElementById("quarters-output").innerHTML = quarters;
    } else if (cents < 24) {
        let quarters = Math.floor(cents / 25);
        cents = cents % 25;
        document.getElementById("quarters-output").innerHTML = '0';
    };

    if (cents > 9) {
        let dimes = Math.floor(cents / 10);
        cents = cents % 10;
        document.getElementById("dimes-output").innerHTML = dimes;
    } else if (cents < 9) {
        let dimes = Math.floor(cents / 10);
        cents = cents % 10;
        document.getElementById("dimes-output").innerHTML = '0';
    };

    if (cents > 4) {
        let nickels = Math.floor(cents / 5);
        cents = cents % 5;
        document.getElementById("nickels-output").innerHTML = nickels;
    } else if (cents < 4) {
        let nickels = Math.floor(cents / 5);
        cents = cents % 5;
        document.getElementById("nickels-output").innerHTML = '0';
    };

    if (cents > 0) {
        let pennies = Math.round(cents);
        document.getElementById("pennies-output").innerHTML = pennies;
    }

    document.getElementById("total-change-output").innerHTML = 'We owe you $' + result + ' , have a nice day!';
}