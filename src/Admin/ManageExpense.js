//with login prompt
import { Grid } from "@mui/material";
import Table from "../Components/Table";

const AdminPage = () => {
  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default AdminPage;
