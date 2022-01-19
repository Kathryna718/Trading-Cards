import Characters from './components/Characters';
import Grid from '@mui/material/Grid';


import './App.css';

    

function App() {

  const characters = [
    {
        title: 'lucy',
        keys:'15,30',
        outfit:'goth,steam',
        board:'starboard,teleporter',
        coins:'7,000',
        character: [
          'Lucy is the cheapest buyable character in the game.',
          'she can be unlocked by purchasing her with 7,000 coins.',

        ]


    },
    {
      title: 'Frank',
      keys:'20',
      outfit:'blacksuit,blackshoes,bunnymask',
      board:'skullfire,greatwhite',
      coins: '40,000',
      characters: [
        'Frank is equipped with a black briefcase.',
        'Frank wears a bunny mask which covers his entire face.',
        'Frank is a character that can be unlocked by purchasing with 40,000 coins. '
      ]
    },
    {
      title: 'Tasha',
      keys:'15,30',
      outfit:'cheer,gym',
      board:'sunset,freestyler',
      coins:'30,000',
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
      player.map((player) => {
          return <Grid item xs={4}>
        <player
            title={player.title}
            outfit={player.outfit}
            board={player.board}
            coins={player.coins}
        image={player.image}
        alt_text={player.alt_text}
        />
          </Grid>
      })
        }
    </Grid>
      );
  }






    export default App;