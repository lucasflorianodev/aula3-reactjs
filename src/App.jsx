import React from 'react';
import EstouConseguindoAprenderReact from "./components/EstouConseguindoAprenderReact";
import Aluno from './components/Aluno';
import Aluno2 from './components/Aluno2';

function App() {
  const alunos = [
      { nome: "Emilly Vilar", email: "emillyvilar@example.com", curso: "Farmácia", media: 9.5 },
      { nome: "Lucas Floriano", email: "lucasfloriano@example.com", curso: "Sistemas de Informação", media: 8.0 },
      { nome: "Ricardo Aurélio", email: "aurelioricardo@example.com", curso: "Farmácia", media: 10 }
  ];

  return (
      <div className="App">
          {alunos.map((aluno, index) => (
              <div className="card" key={index}>
                  <Aluno2
                      nome={aluno.nome}
                      email={aluno.email}
                      curso={aluno.curso}
                      media={aluno.media}
                  />
              </div>
          ))}
      </div>
  );
}

export default App;