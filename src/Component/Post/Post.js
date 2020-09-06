import React from 'react';
// import Button from '@material-ui/core/Button';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 80,
        marginBottom:200
    },
});




const Post = (props) => {






    const classes = useStyles();

    const { id, title } = props.post;
    const history =useHistory();
    const handleClick = (id)=>{
        history.push(`/details/${id}`);
    }
    
    const postStyle ={
        background: 'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)',

        paddingLeft:'400px',
        paddingTop:'10px'
    }

    return (

        <div style ={postStyle}>
            <Card className={classes.root}>
                <h>for  more info click the detail button Buddy</h>
                <br/>
                <InsertEmoticonIcon/>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        // image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <p>Id {id}</p>
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <p>title:{title}</p>
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary" onClick={()=>handleClick(id)} > 
                        Details
                       
        </Button>
                    
                </CardActions>
            </Card>






            {/* <p>Id:{id}</p>
            <p>title:{title}</p>
            <Button variant="contained">Details</Button> */}
        </div>


    );
};

export default Post;