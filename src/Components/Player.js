import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Player({
    characters,
    title,
    outfit,
    keys,
    coins,
    board,
    alt_text,
    image
}){


    return (
        <Card>
            <CardMedia
        Component='img'
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
                <ol>
                    {characters.map(
                        (character)=> {
                            return <li key={character}>{character}</li>;
                        }
                    )}
                </ol>
                <Typography gutterBottom variant="h5" component="div">
          Subway Surfer
        </Typography>
        <Typography variant="body2" color="text.secondary">
        SubSubway Surfers is an endless runner game. As the hooligans run,
         they grab gold coins out of the air while simultaneously dodging collisions with railway. 
        The goal is to go as far as you can, do not get caught by the police. 
        </Typography>
            </CardContent>
            <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>

        
    );

}

export default Player;