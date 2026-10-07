import { useState } from 'react';
import './App.css';

export default function App() {
  // Estados iniciais
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  return (
    <div className="container">
      <header>
        <h1>Painel de Ideias</h1>
        <p>Registre, organize e acompanhe suas ideias de projeto.</p>
      </header>

      {/* Formulário base */}
      <form className="form-ideia">
        <div className="input-group">
          <input
            type="text"
            placeholder="Digite sua nova ideia..."
            value={novaIdeia}
            onChange={(e) => setNovaIdeia(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>
    </div>
  );
}