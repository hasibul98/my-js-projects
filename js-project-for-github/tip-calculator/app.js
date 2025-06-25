const billEl = document.getElementById('bill');
const tipEl = document.getElementById('tip');
const calculateBtn = document.getElementById('calculate');
const total = document.getElementById('total');

window.onload= ()=>{
       main();
}

function main(){
       calculateBtn.addEventListener('click', calculateTotal);
}

function calculateTotal(){
       const billValue = billEl.value;
       const tipValue = tipEl.value;
       const totalValue = billValue * ( 1 + tipValue / 100 );
       total.innerText = totalValue.toFixed(2);
}


