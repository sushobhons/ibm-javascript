let groceryAmount1;
let groceryAmount2;
let groceryAmount3;

function calculateTotalAmount(){
    groceryAmount1 = parseFloat(document.getElementById('grocery1').value);
    groceryAmount2 = parseFloat(document.getElementById('grocery2').value);
    groceryAmount3 = parseFloat(document.getElementById('grocery3').value);

    let totalAmount = groceryAmount1 + groceryAmount2 + groceryAmount3;

    document.getElementById('result').innerText = `The total amount is :$ ${totalAmount}`;
}