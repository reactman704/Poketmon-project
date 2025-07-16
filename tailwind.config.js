/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
    './src/styles/main.css'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffcb05',
        second: '#3d7dca',
        third: '#003a70',
        normal: '#A8A77A',
        fighting: '#C22E28',
        flying: '#A98FF3',
        poison: '#A33EA1',
        ground: '#E2BF65',
        rock: '#B6A136',
        bug: '#A6B91A',
        ghost: '#735797',
        steel: '#B7B7CE',
        fire: '#EE8130',
        water: '#6390F0',
        grass: '#7AC74C',
        electric: '#F7D02C',
        psychic: '#F95587',
        ice: '#96D9D6',
        dragon: '#6F35FC',
        dark: '#705746',
        fairy: '#D685AD',
        shadow: '#5A5A5A',
        unknown: '#68A090',
        none: '#A0A0A0'
      }
    },
  },
  safelist: [
  'text-normal', 'text-fire', 'text-water', 'text-electric', 'text-grass',
  'text-ice', 'text-fighting', 'text-poison', 'text-ground', 'text-rock',
  'text-bug', 'text-ghost', 'text-steel', 'text-psychic', 'text-dragon',
  'text-dark', 'text-fairy', 'text-shadow', 'text-unknown', 'text-none',
  'bg-normal', 'bg-fire', 'bg-water', 'bg-electric', 'bg-grass',
  'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-rock',
  'bg-bug', 'bg-ghost', 'bg-steel', 'bg-psychic', 'bg-dragon',
  'bg-dark', 'bg-fairy', 'bg-shadow', 'bg-unknown', 'bg-none'
],
  plugins: [],
}

