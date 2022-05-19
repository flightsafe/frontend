// @flow
import * as React from "react";
import { Box, CircularProgress } from "@mui/material";
import { jsx } from "@emotion/react";
import JSX = jsx.JSX;
import { cloneElement } from "react";

type Props = {
  icon: JSX.Element;
  color: string;
  percentage: number;
};

export function ProgressIcon(props: Props) {
  const styledIcon = cloneElement(props.icon, {
    style: {
      position: "absolute",
      fontSize: 50,
      color: props.color,
    },
  });

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        p={3}
      >
        <CircularProgress
          sx={{ position: "absolute", color: props.color }}
          size={68}
          variant={"determinate"}
          value={props.percentage * 100}
        />
        <CircularProgress
          sx={{
            position: "absolute",
            color: "rgba(145, 158, 171, 0.16)",
            opacity: 0.48,
          }}
          size={68}
          variant={"determinate"}
          value={100}
        />
        {styledIcon}
      </Box>
    </>
  );
}
