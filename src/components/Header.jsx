import React from 'react';

function Header() {
  return (
    <header className="flex justify-center items-center p-5">
      <div className="w-20 animate-pulse">
        <img src="../public/logo.svg" alt="Logo do site" className="w-full" />
      </div>
      <h1 className="text-center font-sans font-semibold text-[2rem] text-azulEscuro">
        Keep Weight
      </h1>
    </header>
  );
}

export default Header;
