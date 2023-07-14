import React from 'react';
import Header from './components/Header';
import Name from './components/Name';
import NomeTreino from './components/NomeTreino';
import AddExercicio from './components/AddExercicio';
import Treino from './components/Treino';

function App() {
  const [nome, setNome] = React.useState('');
  const [nomeTela, setNomeTela] = React.useState(false);
  const [nomeTreino, setNomeTreino] = React.useState('');
  const [showNameDay, setShowNameDay] = React.useState(false);
  const [treino, setTreino] = React.useState([]);

  const mostrarNome = (e) => {
    e.preventDefault();
    if (nome.length > 0) {
      setNomeTela(true);
    } else {
      alert('Antes de salvar, digite um nome');
    }
    console.log(typeof nome);
    console.log(nome);
  };
  const alterarNome = () => {
    setNomeTela(false);
    setNome('');
  };

  const addTreino = (exercicio, series) => {
    const newTreino = [
      ...treino,
      {
        index: Math.random() * 1000,
        exercicio,
        series,
      },
    ];
    setTreino(newTreino);
  };
  console.log(treino);
  return (
    <>
      <Header />
      <div>
        {nomeTela === false ? (
          <Name nome={nome} setNome={setNome} mostrarNome={mostrarNome} />
        ) : (
          <div className="w-full flex justify-center mt-10">
            <button
              onClick={alterarNome}
              className="border self-center px-6 py-1 rounded-lg bg-azulEscuro opacity-70 ease-in duration-300 font-sans hover:opacity-100"
            >
              Alterar Nome
            </button>
          </div>
        )}
        {nomeTela && (
          <div>
            <h1 className="text-center mt-6 text-[1.3rem] first-letter:uppercase text-azulClaro font-light">
              Guarde Seus pesos aqui{' '}
              <span className="text-azulEscuro font-semibold">
                {nome[0].toUpperCase() + nome.slice(1)}!
              </span>
            </h1>
            <div className="h-[.1rem] w-full bg-[#ccc] mt-3"></div>
          </div>
        )}
        {!showNameDay && nomeTela && (
          <NomeTreino
            setNomeTreino={setNomeTreino}
            setShowNameDay={setShowNameDay}
          />
        )}
        {showNameDay &&
          treino.map((treino) => (
            <Treino
              key={treino.index}
              treino={treino}
              nomeTreino={nomeTreino}
            />
          ))}
        {showNameDay && <AddExercicio addTreino={addTreino} />}
      </div>
    </>
  );
}

export default App;
