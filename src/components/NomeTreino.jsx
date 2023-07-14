import React from 'react';

function NomeTreino({ setNomeTreino, setShowNameDay }) {
  const salvarNome = (e) => {
    e.preventDefault();
    setShowNameDay(true);
  };

  return (
    <section className="w-full flex justify-center items-center mt-10">
      <form onSubmit={salvarNome} className="w-[60%] flex flex-col">
        <label
          htmlFor="name"
          className="text-[1.05rem] font-normal ml-2 mb-[0.125rem] text-azulEscuro"
        >
          Digite o nome do treino
        </label>
        <input
          id="name"
          type="text"
          placeholder="Leg Day"
          onChange={({ target }) => setNomeTreino(target.value)}
          className="rounded-lg px-5 py-1 font-sans text-azulEscuro placeholder:text-azulEscuro bg-[#141414] border border-azulClaro focus:outline-none placeholder:text-opacity-40"
        />
        <button
          type="submit"
          className="border self-center px-6 py-1 rounded-lg bg-azulEscuro opacity-70 ease-in duration-300 font-sans hover:opacity-100 mt-2"
        >
          Salvar
        </button>
      </form>
    </section>
  );
}

export default NomeTreino;
