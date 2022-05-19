// @flow
import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Pagination,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import moment from "moment";
import { Spacer } from "../common";

interface Data {
  id: string;
  status: string;
  title: string;
  description: string;
  startTime?: string | Date;
  endTime?: string | Date;
  progress: string;
}

type Props = {
  records: Data[];
  currentPage: number;
  totalPage: number;
  onRecordClick(id: string): void;
  onPageChange(page: number): void;
};

export function MaintenanceRecordDisplay(props: Props) {
  return (
    <Stack spacing={5}>
      {props.records.map((record) => (
        <Card key={record.id} elevation={0}>
          <CardActionArea onClick={() => props.onRecordClick(record.id)}>
            <CardContent>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Stack>
                  <Typography variant={"h5"} fontWeight={"bolder"}>
                    {record.title}
                  </Typography>
                  <Typography>Status: {record.status}</Typography>
                </Stack>
                <Tooltip title={record.progress}>
                  <CircularProgress
                    size={25}
                    value={70}
                    variant={"determinate"}
                  />
                </Tooltip>
              </Stack>
              <Spacer height={20} />
              <Card elevation={0} style={{ background: "rgb(244, 246, 248)" }}>
                <CardContent>
                  <Typography>
                    Start Time: {moment(record.startTime).fromNow()}
                  </Typography>
                  <Typography>
                    End Time:{" "}
                    {record.endTime
                      ? moment(record.endTime).fromNow()
                      : "Not finish yet"}
                  </Typography>
                </CardContent>
              </Card>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      <Stack alignItems={"flex-end"}>
        <Pagination
          count={props.totalPage}
          page={props.currentPage}
          onChange={(e, page) => props.onPageChange(page)}
        />
      </Stack>
    </Stack>
  );
}
