//with login prompt
import { Grid } from "@mui/material";
import Table from "../Components/Table";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

const AdminPage = () => {
  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              fullWidth
              // helperText="Please enter your topic"
              id="demo-helper-text-misaligned"
              label="Product"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              // helperText="Please enter your topic"
              id="demo-helper-text-misaligned"
              label="Amount"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              // helperText="Please enter your topic"
              id="demo-helper-text-misaligned"
              label="Description"
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <Checkbox defaultChecked color="success" />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value=""
                label="Paid By"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="azarul">Azrul</MenuItem>
                <MenuItem value="kashif">Kashif</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              // helperText="Please enter your topic"
              id="demo-helper-text-misaligned"
              label="Description"
              color="primary"
            />
          </Grid>
        </Grid>
      </div>
      <div>{/* <Table /> */}</div>
    </div>
  );
};

export default AdminPage;
