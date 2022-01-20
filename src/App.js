import Player from './Components/Player';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { palette } from '@mui/system';



import './App.css';


function App() {

  const players = [
    {
      title: 'lucy',
      keys: 'Must purchase keys to unlock outfit',
      outfit: 'Goth dress',
      board: 'starboard or teleporter',
      coins: '7,000',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0414226-5965-40e9-aebb-ce53b75f96f8/dc51nsz-03eda899-4534-43f3-ab26-9f6458077254.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwNDE0MjI2LTU5NjUtNDBlOS1hZWJiLWNlNTNiNzVmOTZmOFwvZGM1MW5zei0wM2VkYTg5OS00NTM0LTQzZjMtYWIyNi05ZjY0NTgwNzcyNTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DrGFfsESuj4uLsqkswLah_CKDNmR7wWEvjt26SquKxg',
      alt_text: 'lucy',
      characters: [

        'lucy is a character that can be unlocked by purchasing her with 7,000 coins.',
        'Her first outfit, the Goth outfit, cost 20 keys',
        'Her second outfit, the steam outfit, cost 30 keys'

      ]


    },
    {
      title: 'Frank',
      keys: 'Must purchase keys to unlock outfit',
      outfit: ' bunnymask',
      board: 'skullfire or greatwhite',
      coins: '40,000',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0414226-5965-40e9-aebb-ce53b75f96f8/dc58p60-9a3d55be-2fc0-41f9-ac5d-4a63929feb81.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwNDE0MjI2LTU5NjUtNDBlOS1hZWJiLWNlNTNiNzVmOTZmOFwvZGM1OHA2MC05YTNkNTViZS0yZmMwLTQxZjktYWM1ZC00YTYzOTI5ZmViODEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mJENNJGhT3YWS7132ry2hxnx8nLB_jH-E0rEAgRWaa0',
      alt_text: 'Frank',
      characters: [

        'Frank is a character that can be unlocked by purchasing him with 40,000 coins. ',
        'His first outfit, the Clown Outfit, costs 15 keys ',
        'His second outfit, the Tiger Outfit, costs 25 keys. '
      ]
    },
    {
      title: 'Tricky',
      keys: 'Must purchase keys to unlock outfit ',
      outfit: 'red hat',
      board: 'sunset or freestyler',
      coins: '30,000',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0414226-5965-40e9-aebb-ce53b75f96f8/dc51msm-fcfacfd6-aaf7-40ff-9d26-68b11085ea76.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwNDE0MjI2LTU5NjUtNDBlOS1hZWJiLWNlNTNiNzVmOTZmOFwvZGM1MW1zbS1mY2ZhY2ZkNi1hYWY3LTQwZmYtOWQyNi02OGIxMTA4NWVhNzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jAqsQ6q2eLNRDDjjVan2O-qJ8ZoEJ78CHdNarKo47RE',
      alt_text: 'Tricky',
      characters: [
        'Tricky is a character that can be unlocked by purchasing him 30,000 coins.',
        'Her first outfit, the Camo Outfit, 20 keys.',
        'Her second outfit, the Heart Outfit, cost 15 keys.',
      ]

      
      }


    
  ];

  return (

    
    <Grid container spacing={2} alignItems="center"
      justifyContent="center" padding="95px"
    >

      {
        players.map((player) => {
          return <Grid item xs={4}>
            <Player
              characters={player.characters}
              title={player.title}
              keys={player.keys}
              image={player.image}
              alt_text={player.alt_text}
            />
          </Grid>
        })
      }
    </Grid>












  );
}

// this allows other components / files to use this component

export default App;