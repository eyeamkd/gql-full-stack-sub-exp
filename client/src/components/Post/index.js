import React from "react";
import { Grid, Box, TextField, Button, Paper, Typography } from "@mui/material";

function Post() {
  return (
    <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', alignContent:'center'}}> 
      <Paper sx={{padding:'20px',maxWidth:'md'}} variant="elevation" elevation={3}> 
        <Grid container spacing={2} direction="column" sx={{justifyContent:'center', alignItems:'center'}}> 
          <Grid item>  
            <Typography variant="h4" align="center" >New Post</Typography>
          </Grid>
          <Grid item>
            <TextField variant="outlined" placeholder="Title" />
          </Grid>
          <Grid item>
            <TextField  rows={5} size="normal" variant="outlined" multiline placeholder="Description" />
          </Grid>
          <Grid item>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Post;
