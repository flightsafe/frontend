// @flow
import * as React from "react";
import { CardMedia, Paper, Stack, Typography } from "@mui/material";

type Props = {};

export function WelcomeDisplay(props: Props) {
  return (
    <Paper
      style={{
        height: "100%",
        borderRadius: 20,
        backgroundColor: "white",
        boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
      }}
      elevation={0}
    >
      <Stack
        height={"100%"}
        p={2}
        pl={10}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Typography variant={"h5"} fontWeight={"bolder"}>
          Welcome Back!
        </Typography>
        <Typography variant={"h3"} fontWeight={"bolder"}>
          Flight Safe
        </Typography>
        <CardMedia
          src={
            "https://minimals.cc/assets/illustrations/illustration_login.png"
          }
          component={"img"}
        />
      </Stack>
    </Paper>
  );
}
