import Player from './Components/Player';
import Grid from '@mui/material/Grid';


import './App.css';

import lucy_image from './Images/lucy.png';

function App() {

  const players = [
    {
      title: 'lucy',
      keys: '15,30',
      outfit: 'goth or steam',
      board: 'starboard or teleporter',
      coins: '7,000',
      image: lucy_image,
      alt_text: 'punk girl',
      characters: [
        'Lucy is the cheapest buyable character in the game.',
        'she can be unlocked by purchasing her with 7,000 coins.',

      ]


    },
    {
      title: 'Frank',
      keys: '20',
      outfit: 'blacksuit and bunnymask',
      board: 'skullfire or greatwhite',
      coins: '40,000',
      image: 'https://static.wikia.nocookie.net/sexypedia/images/d/da/Frank.jpg/revision/latest?cb=20200903203947',
      alt_text: 'villian',
      characters: [
        'Frank is equipped with a black briefcase.',
        'Frank wears a bunny mask which covers his entire face.',
        'Frank is a character that can be unlocked by purchasing with 40,000 coins. ',
      ]
    },
    {
      title: 'Tasha',
      keys: '15,30',
      outfit: 'cheer or  gym',
      board: 'sunset or freestyler',
      coins: '30,000',
      image: 'https://vignette.wikia.nocookie.net/subwaysurf/images/4/45/Tasha.png/revision/latest?cb=20130202025554',
      alt_text: 'cheerleader',
      characters: [
        'Tasha is a character that can be unlocked by purchasing 30,000 coins.',
        'In her Cheer outfit, her hair now changed to pigtail style',
        'In her Gym Outfit, her hair style changes again.',

      ]
    }
  ];

  return (

    <Grid container spacing={2}>

      {
        players.map((player) => {
          return (<Grid item xs={4}>
            <Player
              characters={player.characters}
              title={player.title}
              keys={player.keys}
              outfit={player.outfit}
              board={player.board}
              coins={player.coins}
              image={player.image}
              alt_text={player.alt_text}
            />
          </Grid>)
        })
      }
    </Grid>
  );

}






export default App;