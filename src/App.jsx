import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import PokeCard from './components/PokeCard';

function App() {

  const [pokemons, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const [serachTerms, setSerachTerms] = useState('');
  

  useEffect(() => {
    fetchPokeData(true);
  }, [])
  
  const handleSearchInput = async (e) =>{
    setSerachTerms(e.target.value);
    if(e.target.value.length >0){
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
        const pokemonData = {
          url:`https://pokeapi.co/api/v2/pokemon/${response.data.id}`,
          name: serachTerms
        }
        setPokemon([pokemonData]);
      } catch (error) {
        setPokemon([]);
        console.error(error)
      }
    } else {
      fetchPokeData(true);
    }
  }
  
  const fetchPokeData = async (isFirstFetch) => {

    try {
      const offsetValue = isFirstFetch ? 0 : offset + limit;
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offsetValue}`;
      
      const response = await axios.get(url);

      setPokemon([...pokemons, ...response.data.results]);
      setOffset(offsetValue);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
      <article className='pt-6'>
        <header className='flex flex-col gap-2 w-full px-4 z'>
          <div className='relative z-50'>
            <form 
              className='relative flex justify-center items-center w-[20.5rem] h-6 rounded-lg m-auto'>
                <input 
                  type="text" 
                  value={serachTerms}
                  className='text-xs w-[20.5rem] h-6 px-2 py-1 rounded-lg text-gray-300 text-center bg-[hsl(214,13%,47%)]'
                  onChange={handleSearchInput}

                />

                <button
                  type='submit'
                  className='text-xs bg-slate-900 text-slate-300 w-[3.5rem] h-6 px-2 py-1 rounded-lg text-center absolute right-0 hover:bg-slate-700'
                >
                  검색
                </button>
            </form>
          </div>
          
        </header>

        <section className='pt-6 flex flex-col justify-content items-center overflow-auto z-0'>
          <div className='flex flex-row flex-wrap gap-[16px] items-center justify-center px-2 max-w-4xl'>
            {pokemons.length > 0 ?
            (
              pokemons.map(({url, name}, index) => (
                <PokeCard key={url + index} url ={url} name={name}/>
              ))
            ) :
            (
              <h2 className='font-medium text-lg text-slate-900 mb-1'>
                포켓몬이 없습니다.
              </h2>
            )}
          </div>
        </section>

        {/* 더보기 */}
        <div className='text-center'>
          <button 
            onClick={()=> fetchPokeData(false)}
            className='bg-slate-800 px-6 py-2 my-4 text-base rounded-lg font-bold text-white'>
            더보기
          </button>

        </div>

      </article>
    </>
  )
}

export default App
