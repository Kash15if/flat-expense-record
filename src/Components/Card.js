import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const Card = (props) => {
  const Azarul = props.CardData.azarul;
  const Kashif = props.CardData.kashif;

  const homeCard = props.homeCard;
  return (
    <Grid container spacing={2} p={2}>
      {/* Grid Start */}

      {homeCard && (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          px={2}
          mt={2}
        >
          <Grid item xs={8} textAlign="left">
            You have to pay Azarul:-{" "}
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ bgcolor: "Green", width: "60%", borderRadius: 1 }} p={2}>
              ₹ 240
            </Box>
          </Grid>
        </Grid>
      )}
      {/* drop here */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        px={2}
        my={2}
      >
        <Grid item xs={4} textAlign="left">
          Kashif Paid
        </Grid>

        <Grid item xs={4} textAlign="left">
          Azarul Paid:-
        </Grid>

        <Grid item xs={4} textAlign="left">
          Total Expeses
        </Grid>
      </Grid>

      {/* Avatars Value or money */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        <Grid item xs={4}>
          <Avatar sx={{ bgcolor: "green", width: 70, height: 70 }}>
            ₹ {Kashif}
          </Avatar>
        </Grid>

        <Grid item xs={4}>
          <Avatar sx={{ bgcolor: "green", width: 70, height: 70 }}>
            ₹ {Azarul}
          </Avatar>
        </Grid>

        <Grid item xs={4}>
          <Avatar sx={{ bgcolor: "green", width: 70, height: 70 }}>
            ₹ {Azarul + Kashif}
          </Avatar>
        </Grid>
      </Grid>

      {/* Grid End */}
    </Grid>
  );
};

export default Card;
