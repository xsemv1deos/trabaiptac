import { useState } from 'react';

export default function App() {
  const [ideias, setIdeias] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionarIdeia(e) {
    e.preventDefault();
    if (texto.trim() === "") return;

    const nova = { id: Date.now(), texto: texto, feita: false };
    setIdeias([...ideias, nova]);
    setTexto("");
  }
  function alternarFeita(id) {
    setIdeias(ideias.map(i => i.id === id ? { ...i, feita: !i.feita } : i));
  }
  function removerIdeia(id) {
    setIdeias(ideias.filter(i => i.id !== id));
  }

  const total = ideias.length;
  const concluidas = ideias.filter(i => i.feita).length;

  return (
    <div>
      <h1>Painel de Ideias</h1>

      <form onSubmit={adicionarIdeia}>
        <input
          type="text"
          placeholder="Nova ideia..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {ideias.map((i) => (
          <li key={i.id}>
            <label style={{ textDecoration: i.feita ? "line-through" : "none" }}>
              <input
                type="checkbox"
                checked={i.feita}
                onChange={() => alternarFeita(i.id)}
              />
              {i.texto}
            </label>
            <button onClick={() => removerIdeia(i.id)}>✕</button>
          </li>
        ))}
      </ul>

      <p>{`${total} ideias no painel · ${concluidas} concluídas`}</p>
    </div>
  );
}