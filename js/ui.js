import api from "./api";

const ui = {
  async renderizarPensamentos() {
    const listaPensamento = document.getElementById("lista-pensamentos");

    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.array.forEach((pensamento) => {
        listaPensamento.innerHTML += `
             <li class="li-pensamento" data-id="${pensamento.id}">
             <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
             <div class="pensamento-conteudo">${pensamento.conteudo}</div>
             <div class="pensamento-autoria">${pensamento.autoria}</div>
             </li>
                `;
      });
    } catch {
      alert("Erro ao renderizar pensamentos");
    }
  },
};
