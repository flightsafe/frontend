// @flow
import * as React from "react";
import { GetServerSideProps } from "next";
import {
  serviceOptions,
  PlaneService,
  MaintenanceRecordDetail,
} from "api-client";
import axios from "axios";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { PageTitle, Spacer, StatisticsDisplay, StyledDataGrid } from "ui";
import { GridColDef } from "@mui/x-data-grid";
import { Apps, Done, Warning } from "@mui/icons-material";

type Props = {
  record: MaintenanceRecordDetail;
};

const columns: GridColDef[] = [
  {
    headerName: "id",
    field: "id",
  },
  {
    headerName: "Name",
    field: "name",
    flex: 4,
  },
  {
    headerName: "Description",
    field: "description",
    flex: 10,
  },
  {
    headerName: "Status",
    field: "status",
    flex: 4,
  },
];

export default function Index(props: Props) {
  const { record } = props;
  const router = useRouter();

  const goodCount = React.useMemo(() => {
    return (
      record.items?.filter((i: any) => i.status === "GOOD_CONDITION").length ??
      0
    );
  }, [props.record]);

  const badCount = React.useMemo(() => {
    return (
      record.items?.filter((i: any) => i.status === "BAD_CONDITION").length ?? 0
    );
  }, [props.record]);

  const expiredCount = React.useMemo(() => {
    return record.items?.filter((i: any) => i.status === "EXPIRED").length ?? 0;
  }, [props.record]);

  const totalCount = React.useMemo(() => {
    return record.items?.length ?? 0;
  }, [props.record]);

  return (
    <Stack marginLeft={10} spacing={2}>
      <PageTitle
        title={record?.name ?? ""}
        action={<Button variant={"contained"}>Add item</Button>}
        routes={[
          {
            title: "Plane",
            link: "/plane",
          },
          {
            title: record.plane_name ?? "",
            link: `/plane/${record.plane}`,
          },
          {
            title: record.name ?? "",
            link: `/plane/record/${record.id}`,
          },
        ]}
      />
      <Spacer height={20} />
      <Card elevation={0}>
        <Box p={3}>
          <StatisticsDisplay
            data={[
              {
                title: "Total",
                unit: "items",
                value: `${totalCount}`,
                color: "grey",
                icon: <Apps />,
                percentage: 1,
              },
              {
                title: "Good",
                unit: "",
                value: `${goodCount}`,
                color: "green",
                icon: <Done />,
                percentage: goodCount / totalCount,
              },
              {
                title: "Bad",
                unit: "",
                value: `${badCount}`,
                color: "red",
                icon: <Done />,
                percentage: badCount / totalCount,
              },
              {
                title: "Expire",
                unit: "",
                value: `${expiredCount}`,
                color: "orange",
                icon: <Warning />,
                percentage: expiredCount / totalCount,
              },
            ]}
          />
        </Box>
      </Card>
      <Card elevation={0}>
        <Box p={2} width={"100%"}>
          <Typography variant={"h5"} fontWeight={"bolder"}>
            Maintenance items
          </Typography>
          <StyledDataGrid
            style={{ width: "100%" }}
            columns={columns}
            rows={record.items ?? []}
            autoHeight={true}
            hideFooterPagination
          />
        </Box>
      </Card>
      <Spacer height={20} />
    </Stack>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  serviceOptions.axios = axios;
  const id = context.query.id as string;
  const data = await PlaneService.retrieveMaintenanceRecord({ id });

  return {
    props: {
      record: data,
    },
  };
};
