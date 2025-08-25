


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {
        alert("⚠️ Por favor, preencha todos os campos!");
        return;
    }

    // Exemplo simples de "login"
    if (email === "email@com" && senha === "senha") {
        alert("✅ Login realizado com sucesso!");
        window.location.href = "pedidos.html";
    } else {
        alert("❌ E-mail ou senha incorretos.");
    }
});
