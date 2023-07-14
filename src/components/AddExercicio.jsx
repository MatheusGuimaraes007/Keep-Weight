import React from 'react';

function AddExercicio({ addTreino }) {
  const [exercicio, setExercicio] = React.useState('');
  const [series, setSeries] = React.useState('');

  const enviarDados = (e) => {
    e.preventDefault();
    if (exercicio && series) {
      addTreino(exercicio, series);
    } else {
      alert('Preencha os campos corretamente');
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-3">
      <form onSubmit={enviarDados} className=" w-[70%] flex flex-col">
        <label
          htmlFor="exercicio"
          className="text-[1.05rem] font-normal ml-2 mb-[0.125rem] text-azulEscuro"
        >
          Nome do Exercicio
        </label>
        <input
          id="exercicio"
          type="text"
          onChange={({ target }) => setExercicio(target.value)}
          value={exercicio}
          className="rounded-lg px-2 py-1 font-sans text-azulEscuro placeholder:text-azulEscuro bg-[#141414] border border-azulClaro focus:outline-none placeholder:text-opacity-40"
        />
        <label
          htmlFor="serie"
          className="text-[1.05rem] font-normal ml-2 mb-[0.125rem] text-azulEscuro mt-2"
        >
          Series
        </label>
        <input
          id="serie"
          type="number"
          onChange={({ target }) => setSeries(target.value)}
          value={series}
          className="rounded-lg px-2 py-1 font-sans text-azulEscuro placeholder:text-azulEscuro bg-[#141414] border border-azulClaro focus:outline-none placeholder:text-opacity-40 w-16"
        />
        <button
          type="submit"
          className="border self-center rounded-lg bg-azulEscuro opacity-70 ease-in duration-300 font-sans hover:opacity-100 px-4 py-[.1rem] mt-4"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default AddExercicio;
