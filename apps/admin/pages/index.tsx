import type { NextPage } from "next";
import { Grid, Hidden } from "@mui/material";
import { LoginDisplay, WelcomeDisplay } from "ui";

const Home: NextPage = () => {
  return (
    <Grid container p={2} style={{ height: "100vh" }} spacing={5}>
      <Hidden mdDown>
        <Grid item md={6} style={{ height: "100%" }}>
          <WelcomeDisplay />
        </Grid>
      </Hidden>
      <Grid item sm={12} md={6} style={{ height: "100%" }}>
        <LoginDisplay />
      </Grid>
    </Grid>
  );
};

export default Home;
