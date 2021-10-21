import React from "react";
import { Grid, Box, TextField, Button, Paper, Typography } from "@mui/material";

function Post() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [data, setdata] = React.useState(null);
  const dataStatus = useFormPost(data);

  const submitPost = () => {
    setdata(1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Paper
        sx={{ padding: "20px", maxWidth: "md" }}
        variant="elevation"
        elevation={3}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item>
            <Typography variant="h4" align="center">
              New Post
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              inputProps={{ "data-testid": "post-input-title" }}
            />
          </Grid>
          <Grid item>
            <TextField
              rows={5}
              size="normal"
              variant="outlined"
              multiline
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              inputProps={{ "data-testid": "post-input-description" }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={submitPost}>
              Submit
            </Button>

            <Typography variant="h4">{dataStatus}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Post;

const useFormPost = (data) => {
  const [status, setStatus] = React.useState("Data is yet to pass");
  React.useEffect(() => {
    if (data != null) setStatus("Data not null");
    else setStatus("Data null");
  }, [data]);
  return status;
};
