import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";

const LogInForm = ({ userLogInFun }) => {
  const [values, setValues] = useState({
    id: "",
    pass: "",
  });

  console.log(process.env);
  const handleSubmitBtn = () => {
    if (
      values.id === process.env.REACT_APP_adminUserId &&
      values.pass === process.env.REACT_APP_adminPassword
    ) {
      userLogInFun();
    }
    console.log(process.env.REACT_APP_adminUserId);
  };

  const handleTextChange = (event) => {
    var { id, value } = event.target;
    setValues({
      ...values,
      [id]: value,
    });
    //console.log(values);
  };
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      mt={5}
    >
      <Grid item sm={6} xs={10}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          p={15}
          sx={{ backgroundColor: "#f8f9fa" }}
        >
          <Grid item sm={10} xs={12}>
            <TextField
              fullWidth
              // helperText="Please enter your topic"
              id="id"
              label="User id"
              color="primary"
              onChange={handleTextChange}
            />
          </Grid>

          <Grid item sm={10} xs={12}>
            <TextField
              fullWidth
              // helperText="Please enter your topic"
              id="pass"
              label="Password"
              color="primary"
              onChange={handleTextChange}
            />
          </Grid>

          <Grid item sm={8} xs={12}>
            <Button
              variant="contained"
              color="success"
              component="span"
              size="large"
              onClick={handleSubmitBtn}
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogInForm;
