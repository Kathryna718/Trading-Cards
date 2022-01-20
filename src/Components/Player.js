import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Game from "./Game.js";
import Text from "./Text.js";

function Player({
    characters,
    title,
    outfit,
    keys,
    coins,
    board,
    alt_text,
    image
}) {


    return (

        <Card sx={{ height: '550px', width: '300px', bgcolor: 'warning.main', color: 'warning.contrastText', p: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center" >
                <Avatar alt="" src={image} /><Chip label="Tap to Play" component="a" href="#basic-chip" variant="outlined" clickable />

            </Stack>

            <CardMedia
                //component='img'
                height='140'
                image={image}
                alt={alt_text}
            />
            <CardContent>
                <h4>
                    {title}
                </h4>
                <p>
                    {outfit}
                </p>
                <p>
                    {keys}
                </p>
                <p>
                    {coins}
                </p>
                <p>
                    {board}
                </p>
                <ul>
                    {characters.map(
                        (character) => {
                            return <li key={character}>{character}</li>;
                        }
                    )}
                </ul>
                <Text>

                </Text>
            </CardContent>
            <Game>

            </Game>

        </Card>


    );

}

export default Player;

