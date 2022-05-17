// @flow
import * as React from "react";
import {
  Box,
  CardMedia,
  Chip,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";

type Props = {
  title: string;
  description: string;
  image: string;
  status: string;
  updatedTime?: string | Date;
};

export function PlaneProfileDisplay(props: Props) {
  return (
    <Stack alignItems={"center"}>
      <CardMedia image={props.image} component={"img"} height={400} />
      <Box p={2} style={{ width: "100%" }}>
        <Stack spacing={2} width={"100%"}>
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={"bolder"}>Last updated</Typography>
            <Typography>{moment(props.updatedTime).fromNow()}</Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={"bolder"}>Status</Typography>
            <Typography>{props.status}</Typography>
          </Stack>

          <Typography
            style={{
              maxHeight: 300,
              overflowY: "scroll",
              background: "#0B93F6",
              color: "white",
              borderRadius: "14px",
              padding: 20,
            }}
          >
            {props.description}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
