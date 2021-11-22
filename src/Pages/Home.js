import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

import LineChart from "../Components/LineChart";
import PieChart from "../Components/PieChart";
import Card from "../Components/Card";
import Table from "../Components/Table";

const Home = (props) => {
  return (
    <div>
      <Grid container spacing={2} direction="row" alignItems="stretch" p={3}>
        <Grid item xs={12} md={6} mt={2}>
          <Paper>
            <Card CardData={props.pieChartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <PieChart PieChartData={props.pieChartData} homeCard={true} />
        </Grid>
        <Grid item xs={12} mt={2}>
          <Paper>
            <LineChart LineChartData={props.lineChartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Paper>
            {props.tableData !== "Loading" && (
              <Table tableData={props.tableData} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
