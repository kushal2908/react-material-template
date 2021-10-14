import { Grid, Paper } from "@mui/material";
import Layout from "./Components/Layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Paper>xs=6 md=8</Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper>xs=6 md=4</Paper>
          </Grid>
          <Grid item xs={6} md={4}>
            <Paper>xs=6 md=4</Paper>
          </Grid>
          <Grid item xs={6} md={8}>
            <Paper>xs=6 md=8</Paper>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
