var accounts = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];
  let selectedAccount = null;
  let passwordAttempts = 0;
  function selectAccount() {
    let accountSelect = document.getElementById("account");
    let passwordSection = document.getElementById("password-section");
    let selectedValue = accountSelect.value;
    if (selectedValue !== "") {
      selectedAccount = accounts[selectedValue];
      passwordSection.style.display = "block";
    } else {
      selectedAccount = null;
      passwordSection.style.display = "none";
    }
  }
  function validatePassword() {
    let passwordInput = document.getElementById("password");
    let passwordMessage = document.getElementById("password-message");
    let password = passwordInput.value;
    if (selectedAccount && password == "1234") {
      passwordAttempts = 0;
      passwordMessage.innerText = "";
      passwordInput.value = "";
      showOptions();
    } else {
      passwordAttempts++;
      passwordInput.value = "";
      if (passwordAttempts === 3) {
        selectedAccount = null;
        passwordSection.style.display = "none";
        accountSelect.selectedIndex = 0;
      }
      passwordMessage.innerText = "Password incorrecto. Intento #" + passwordAttempts;
    }
  } 
  function showOptions() {
    let optionsSection = document.getElementById("options");
    optionsSection.style.display = "block";
  }
  function checkBalance() {
    let message = document.getElementById("message");
    message.innerText = "Saldo actual: $" + selectedAccount.saldo;
  }
  function deposit() {
    let amountInput = prompt("Ingrese el monto a depositar:");
    let amount = parseFloat(amountInput);
  
    if (!isNaN(amount) && amount > 0) {
      selectedAccount.saldo += amount;
      let message = document.getElementById("message");
      message.innerText = "Se depositaron $" + amount.toFixed(2) + ". Nuevo saldo: $" + selectedAccount.saldo.toFixed(2);
    } else {
      let message = document.getElementById("message");
      message.innerText = "Ingrese un monto válido.";
    }
  }
  function withdraw() {
    let amountInput = prompt("Ingrese el monto a retirar:");
    let amount = parseFloat(amountInput);
  
    if (!isNaN(amount) && amount > 0) {
      if (amount <= selectedAccount.saldo) {
        selectedAccount.saldo -= amount;
        let message = document.getElementById("message");
        message.innerText = "Se retiraron $" + amount.toFixed(2) + ". Nuevo saldo: $" + selectedAccount.saldo.toFixed(2);
      } else {
        let message = document.getElementById("message");
        message.innerText = "Saldo insuficiente. Fondos disponibles: $" + selectedAccount.saldo.toFixed(2);
      }
    } else {
      let message = document.getElementById("message");
      message.innerText = "Ingrese un monto válido.";
    }
  }