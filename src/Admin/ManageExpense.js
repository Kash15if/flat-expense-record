import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import Table from "../Components/Table";

const AdminPage = () => {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [paidForBoth, setPaidForBoth] = useState(true);

  const handleChange = (event) => {
    setPaidForBoth(!paidForBoth);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        mt={5}
        mb={10}
      >
        <Grid item sm={6} xs={10}>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                // helperText="Please enter your topic"
                id="demo-helper-text-misaligned"
                label="Product"
                color="primary"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                // helperText="Please enter your topic"
                id="demo-helper-text-misaligned"
                label="Amount"
                color="primary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                // helperText="Please enter your topic"
                id="demo-helper-text-misaligned"
                label="Description"
                color="primary"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  Paid by
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={paidBy}
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

            <Grid item sm={6} xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      color="success"
                      checked={paidForBoth}
                      onChange={handleChange}
                    />
                  }
                  label="Paid For Both"
                />
              </FormGroup>
            </Grid>

            <Grid item sm={12} xs={12}>
              <Button
                variant="contained"
                color="success"
                component="span"
                size="large"
                onClick={handleChange}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Table />
    </div>
  );
};

export default AdminPage;
