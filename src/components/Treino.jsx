import React from 'react';

function Treino({ treino, nomeTreino }) {
  return (
    <div className="w-full flex justify-center mt-3">
      <div className="w-[95%] flex justify-center items-center bg-[#262626] rounded-xl mt-1">
        <div className="w-full flex justify-between items-center border rounded-md border-azulEscuro px-2 py-3">
          <div className="w-full flex flex-col">
            <h1 className="text-lg font-medium text-azulEscuro text-[1rem]">
              Treino de {nomeTreino}
            </h1>
            <p className="text-[#ccc] text-[0.8rem]">
              Exercicio:{' '}
              <span className="font-semibold">{treino.exercicio}</span>
            </p>
            <p className="text-[#ccc] text-[0.8rem]">
              Series: <span className="font-semibold">{treino.series}</span>
            </p>
          </div>
          <form className="w-[100%] flex flex-col justify-center items-center">
            <label
              htmlFor="peso"
              className="text-[#ccc] text-[0.8rem] mb-[.1rem] font-bold"
            >
              Kg
            </label>
            <input
              id="peso"
              type="number"
              className="w-16 rounded-lg px-2 py-1 font-sans text-azulEscuro placeholder:text-azulEscuro bg-[#141414] border border-azulClaro focus:outline-none placeholder:text-opacity-40"
            />
            <button className="border self-center rounded-lg bg-azulEscuro opacity-70 ease-in duration-300 font-sans hover:opacity-100 px-4 py-[.1rem] mt-2">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Treino;
