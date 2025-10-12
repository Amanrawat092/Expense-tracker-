let total = 0;
let count = 0;

const addBtn = document.getElementById("add-expense-btn");

addBtn.addEventListener("click", function() {
    const name = document.getElementById("expense-name").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (!name || isNaN(amount) || amount <= 0) {
        alert("Please enter valid expense name and amount!");
        return;
    }

    count++;

    const tbody = document.getElementById("expense-table").querySelector("tbody");
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${count}</td>
        <td>${name}</td>
        <td>${amount}</td>
    `;

    tbody.appendChild(tr);

    total += amount;
    document.getElementById("total").innerText = total;

    // Clear inputs
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
    
}
)
