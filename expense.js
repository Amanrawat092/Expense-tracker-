let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let total = 0;

const addBtn = document.getElementById("add-expense-btn");
const clearBtn = document.getElementById("clear-all-btn");
const tbody = document.querySelector("#expense-table tbody");
const totalDisplay = document.getElementById("total");

// Load data on startup
function loadExpenses() {
    tbody.innerHTML = "";
    total = 0;

    expenses.forEach((exp, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${exp.name}</td>
            <td>${exp.category}</td>
            <td>${exp.amount}</td>
            <td><button class="delete-btn" data-index="${index}">Delete</button></td>
        `;
        tbody.appendChild(tr);
        total += exp.amount;
    });

    totalDisplay.innerText = total;
}

loadExpenses();

addBtn.addEventListener("click", function () {
    const name = document.getElementById("expense-name").value;
    const category = document.getElementById("expense-category").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (!name || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount!");
        return;
    }

    // Store expense in the array and LocalStorage
    expenses.push({ name, category, amount });
    localStorage.setItem("expenses", JSON.stringify(expenses));

    loadExpenses();

    // Clear inputs
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
});

// Handle delete button using event delegation
tbody.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const index = e.target.getAttribute("data-index");

        // Remove from array and update storage
        expenses.splice(index, 1);
        localStorage.setItem("expenses", JSON.stringify(expenses));

        loadExpenses();
    }
});

// Clear all
clearBtn.addEventListener("click", function () {
    if (!confirm("Are you sure you want to clear all expenses?")) return;

    expenses = [];
    localStorage.setItem("expenses", JSON.stringify(expenses));

    loadExpenses();
});