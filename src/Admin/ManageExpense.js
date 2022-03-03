import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import Table from "../Components/Table";
import LogInForm from "./AdminLogin";

import { pushDataTODb } from "./Store";

import db from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const AdminPage = () => {
  const [values, setValues] = useState({
    amount: "",
    date: "",
    description: "",
    paidBy: "",
    paidForBoth: true,
    product: "",
    time: "",
  });

  const [tabData, setTabData] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const userLogInFun = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    const q = collection(db, "expense-details");
    onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setTabData(data);
      console.log("Current cities in CA: ", data);
    });
  }, []);

  const handleTextChange = (event) => {
    var { id, value } = event.target;
    setValues({
      ...values,
      [id]: value,
    });
    //console.log(values);
  };

  const handleDropdownChange = (event) => {
    var { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log(values);
  };

  const handleCheckBoxChange = (event) => {
    var { checked } = event.target;
    setValues({
      ...values,
      paidForBoth: checked,
    });
  };

  const handleSubmitBtn = () => {
    const dateX = new Date();
    const date1 = dateX.toLocaleDateString();
    const time1 = dateX.toLocaleTimeString();
    pushDataTODb({ ...values, date: date1, time: time1 });
    // amount, date, desc, paidBy, paidForBoth, product, time
  };

  return (
    <div>
      {!loggedIn && <LogInForm userLogInFun={userLogInFun} />}
      {loggedIn && (
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
                    id="product"
                    label="Product"
                    color="primary"
                    onChange={handleTextChange}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    type="number"
                    // helperText="Please enter your topic"
                    id="amount"
                    label="Amount"
                    color="primary"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                    onChange={handleTextChange}
                    value={values.amount}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    // helperText="Please enter your topic"
                    id="description"
                    label="Description"
                    color="primary"
                    onChange={handleTextChange}
                    value={values.description}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Paid by</InputLabel>
                    <Select
                      labelId="paidBy"
                      name="paidBy"
                      value={values.paidBy}
                      label="Paid By"
                      onChange={handleDropdownChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="azarul">Azarul</MenuItem>
                      <MenuItem value="kashif">Kashif</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item sm={6} xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="success"
                          checked={values.paidForBoth}
                          onChange={handleCheckBoxChange}
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
                    onClick={handleSubmitBtn}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {tabData && <Table tableData={tabData} />}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
