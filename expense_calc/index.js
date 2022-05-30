import init, { Calculator } from "./pkg/expense_calc.js";
let wasm = await init();

//get website elements
const expenses_list = document.getElementById("expenses_list");
const add_expense = document.getElementById("add_expense");
const calculate = document.getElementById("calculate");

const ext_calculator = Calculator.new();

expenses_list.textContent = ext_calculator.print_expenses();

add_expense.addEventListener("click", event => {
    const buyer = document.getElementById("buyer").value;
    const amount = document.getElementById("amount").value;
    const owers = document.getElementById("owers").value;

    const idx = ext_calculator.add_expense(buyer,amount);

    owers.split(new RegExp(", ?")).forEach(name => {
        if (false == ext_calculator.add_ower_to_expense(name,idx)) {
            alert("ERROR adding "+name);
        }
    });
    expenses_list.textContent = ext_calculator.print_expenses();
})

calculate.addEventListener("click", event => {
    const report = document.getElementById("report");
    report.innerHTML = "";

    const tr = report.insertRow();
    const td1 = tr.insertCell();
    td1.appendChild(document.createTextNode(ext_calculator.calculate()));

    report
})