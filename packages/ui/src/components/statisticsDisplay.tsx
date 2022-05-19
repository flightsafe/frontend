// @flow
import * as React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { ProgressIcon } from "../common/progressIcon";

interface Statistics {
  title: string;
  unit: string;
  value: string;
  color: string;
  icon: JSX.Element;
  percentage: number;
}

type Props = {
  data: Statistics[];
};

export function StatisticsDisplay(props: Props) {
  return (
    <Stack direction={"row"} justifyContent={"space-around"}>
      {props.data.map((d, index) => (
        <>
          <Stack direction={"row"} alignItems={"center"} spacing={4}>
            <ProgressIcon
              icon={d.icon}
              color={d.color}
              percentage={d.percentage}
            />
            <Stack>
              <Typography fontWeight={"bolder"} variant={"h6"}>
                {d.title}
              </Typography>
              <Stack direction={"row"} alignItems={"flex-end"} spacing={0.3}>
                <Typography fontWeight={"bolder"}>{d.value}</Typography>
                <Typography fontWeight={"lighter"} fontSize={"small"}>
                  {d.unit}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          {index < props.data.length - 1 && (
            <Divider
              orientation={"vertical"}
              flexItem
              style={{ borderStyle: "dashed" }}
            />
          )}
        </>
      ))}
    </Stack>
  );
}
