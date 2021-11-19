import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

import LineChart from "../Components/LineChart";
import PieChart from "../Components/PieChart";
import Card from "../Components/Card";
import Table from "../Components/Table";

const Home = () => {
  return (
    <div>
      <Grid container spacing={2} direction="row" alignItems="stretch" p={3}>
        <Grid item xs={12} md={6} mt={2}>
          <Paper>
            <Card />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <PieChart />
        </Grid>
        <Grid item xs={12} mt={2}>
          <Paper>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Paper>
            <Table />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
