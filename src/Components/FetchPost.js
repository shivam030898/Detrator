import React ,{useState} from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const FetchPost = () => {



    const [post,setPost]=useState([]);

    //Fetching the Api Data with the help of Axios
    const fetchPost=()=>{
        axios.get("https://dummyjson.com/posts")
        .then((response)=>{
            console.log(response);
            setPost(response.data.posts)
        }).catch(err=>{
          console.error(err)
        })
    }
  return (
    <>
    {/* Button for fetchpost function to get data while clicking on the button using on Click*/}
          <Button className='btn btn-primary' onClick={fetchPost}>Fetch Post</Button>
   {/* Mapping the Data */}
      {post.map((value,index)=>{
        return(
          <div key={index}>
             <Card sx={{ minWidth: 275 }}>
          <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {value.id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {value.title}
        </Typography>
        <Typography variant="body2">
        {value.body}
          <br />
          {value.tags}
          <br/>
          {value.reactions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
      </div>
        )
      })}
      
  </>
  )
}

export default FetchPost
