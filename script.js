document.getElementById("servicoForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const tipoServico = document.getElementById("tipoServico").value;
    const cidade = document.getElementById("cidade").value;
  
    if (!nome || !tipoServico || !cidade) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    const formData = {
      nome: nome,
      tipoServico: tipoServico,
      email: document.getElementById("email").value,
      cidade: cidade,
    };
  
    console.log("Dados:", formData);
  
    // Simulação de envio de dados
    fetch("http://localhost:3333/solicitacao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("O formulário foi preenchido com sucesso!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Ocorreu um erro ao enviar o formulário.");
      });
  });
  