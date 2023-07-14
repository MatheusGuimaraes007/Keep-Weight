import React from 'react';

function Name({ nome, setNome, mostrarNome }) {
  return (
    <div className="w-full flex justify-center mt-10">
      <form className="flex flex-col gap-3" onSubmit={mostrarNome}>
        <input
          onChange={({ target }) => setNome(target.value)}
          type="text"
          className="rounded-lg px-5 py-1 font-sans text-azulEscuro placeholder:text-azulEscuro bg-[#141414] border border-azulClaro focus:outline-none placeholder:text-opacity-40"
          placeholder="Digite seu nome..."
          value={nome}
        />
        <button className="border self-center px-6 py-1 rounded-lg bg-azulEscuro opacity-70 ease-in duration-300 font-sans hover:opacity-100">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default Name;
