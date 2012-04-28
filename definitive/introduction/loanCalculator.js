function calculate() {

    // look up the input and output element
    var amount = document.getElementById("amount");
    var inter = document.getElementById("interest");
    var months = document.getElementById("repayment");
    var zipcode = document.getElementById("zipcode");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalInterest = document.getElementById("totalinterest");

    // convert input to number value
    var principle = parseFloat(amount.value);
    var interests = parseFloat(inter.value) / 100 / 12;
    var payments = parseFloat(months.value) / 12;

    //compute monthly payment figure
    var x = Math.pow(1 + interests, payments);
    var monthly = (principle * x * interests) / (x - 1)

    //If the result is finite number, the input was good and we have meaningful results to display
    if (isFinite(monthly)) {
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2)
        totalinterest.innerHTML = ((monthly * payments) - principle).toFixed(2);

        // save the input to local storage
        save(amount.value, inter.value, months.value, zipcode.value);
    } else {
        payment.innerHTML = "";
        total.innerHTML = "";
        totalinterest.innerHTML = "";
    }
}


// Save the user's input as properties of the localStorage object

function save(amount, intes, years, zipcode) {
    if (window.localStorage) {
        localStorage.loan_amount = amount;
        localStorage.loan_interest = intes;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}

// Restore local storage when document first loads.
window.onload = function () {
    if (window.localStorage && window.localStorage.loan_amount) {
        document.getElementById("amount").value = window.localStorage.loan_amount;
        document.getElementById("interest").value = window.localStorage.loan_interest;
        document.getElementById("repayment").value = window.localStorage.loan_years;
        document.getElementById("zipcode").value = window.localStorage.loan_zipcode;
        calculate();
    }
}