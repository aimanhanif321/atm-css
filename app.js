let balance = 5000;

function withdraw() {
    let amount = parseInt(document.getElementById(`input`).value);
    if(isNaN(amount)){
        document.getElementById(`output`).innerHTML = "Please Enter Valid Amount";
    }
    else if(amount > balance){
        document.getElementById(`output`).innerHTML = "Insufficent Balanace";
    }
    else if(amount < balance){
        balance -= amount;
        document.getElementById(`output`).innerHTML = "You have withdrawn Rs" + amount + ". Your current balance is Rs" + balance;
    }
}

function checkBalance() {
    document.getElementById(`output`).innerHTML = `You current balance is ${balance}`
}