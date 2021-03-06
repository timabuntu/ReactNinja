import { useState } from 'react';

export function Lesson01() {
  const [valor, setValor] = useState(() => {
    return 0;
  });

  const decremento = () => {
    setValor((oldState) => oldState - 1);
  };

  const incremento = () => {
    setValor((oldState) => oldState + 1);
  };

  return (
    <>
      <h2 className='text-xl font-semibold text-center text-blue-400 uppercase'>
        Detalhes sobre o funcionamento do useState
      </h2>
      <main className='p-8'>
        <h3 className='text-xl font-semibold text-emerald-300'>
          Incremento e Decremento
        </h3>

        <div className='flex gap-4 mt-4'>
          <button
            className='flex items-center justify-center p-4 bg-gray-700 rounded text-cyan-300'
            onClick={decremento}
          >
            Decremento -
          </button>
          <button
            className='p-4 bg-gray-700 rounded text-cyan-300'
            onClick={incremento}
          >
            Incremento +
          </button>
        </div>
        <p className='block p-4 mt-4 text-center text-gray-100 bg-purple-700 rounded'>
          Valor: {valor}
        </p>
      </main>
    </>
  );
}
