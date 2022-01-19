import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





function Characters({
    player,
    title,
    outfit_change,
    keys,
    coins,
    hoverboard,
    alt_text,
    image
}){


    return(
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
                    {outfit_change}
                </p>
                <p>
                    {keys}
                </p>
                <p>
                    {coins}
                </p>
                <p>
                    {hoverboard}
                </p>
                <ol>
                    {player.map(
                        (characters)=> {
                            return <li key={player}>{player}</li>;
                        }
                    )}
                </ol>
                <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lucy is a girl whose looks are styled like goth or steam.
         She can be unlocked by purchasing her with 7,000 coins.
         She is also the cheapest character to buy with Coins. 
        </Typography>
            </CardContent>
            <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>

        
    );

}

export default Characters;