import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

import Card from "../Components/Card";
import Pie from "../Components/PieChart";
import Table from "../Components/Table";

const Member = (props) => {
  return (
    <div>
      <Grid container spacing={2} p={3}>
        <Grid item xs={12} md={6} mt={2}>
          <Paper>
            {/* //your balanace and records //ie. you have to pay azarul 90 Rs //Azarul
        will pay you 90 Rs //color green and red */}

            <Card
              CardData={props.pieChartData}
              homeCard={false}
              name={props.name}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          {/* //you paid for Table */}
          <Pie PieChartData={props.pieChartData} homeCard={false} />
        </Grid>
        <Grid item xs={12} mt={2}>
          <div>
            <Paper>
              <Table tableData={props.tableData} />
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Member;
