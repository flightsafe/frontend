// @flow
import * as React from "react";
import { GetServerSideProps } from "next";
import {
  Plane,
  PlaneService,
  serviceOptions,
  MaintenanceRecord,
} from "api-client";
import axios from "axios";
import {
  Alert,
  Button,
  Card,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import {
  MaintenanceRecordDisplay,
  PageTitle,
  PlaneProfileDisplay,
  Spacer,
} from "ui";
import { configs, interfaces } from "common";
import { useQuery } from "react-query";
import getPageNumber from "../../utils/getPageNumber";
import getPaginatedString from "../../utils/getPaginatedString";

type Props = {
  plane: Plane;
  page: number;
};

export default function Index(props: Props) {
  const { plane, page } = props;
  const router = useRouter();
  const { isLoading, data, error } = useQuery<
    interfaces.Pagination<MaintenanceRecord>
  >(["maintenance", { id: plane.id!, page }], async () => {
    serviceOptions.axios = axios;
    return await PlaneService.listMaintenanceRecords({
      plane: plane.id! as any,
      page: page,
    });
  });

  return (
    <Stack marginLeft={10}>
      <PageTitle
        title={plane.name}
        action={<Button variant={"contained"}>Add record</Button>}
        routes={[
          {
            title: "Plane",
            link: "/plane",
          },
          {
            title: plane.name,
            link: `/plane/${plane.id}`,
          },
        ]}
      />
      <Spacer height={20} />
      <Grid container spacing={4}>
        <Grid item md={4}>
          <Card
            elevation={0}
            style={{ position: "sticky", top: configs.appbarHeight + 10 }}
          >
            <PlaneProfileDisplay
              title={plane.name}
              image={plane.image}
              status={"OK"}
              description={plane.description}
              updatedTime={plane.updated_time}
            />
          </Card>
        </Grid>
        <Grid item md={8}>
          <>
            {isLoading && <CircularProgress />}
            {error && <Alert severity={"error"}>{JSON.stringify(error)}</Alert>}
            {data && (
              <MaintenanceRecordDisplay
                onPageChange={async (page) => {
                  const query = router.query;
                  const newQuery = getPaginatedString(query, page);
                  await router.push(`/plane/${plane.id}/?${newQuery}`);
                }}
                currentPage={page}
                totalPage={data.totalPage}
                records={
                  data.results.map((r: any) => ({
                    id: r.id,
                    title: r.name,
                    description: r.description,
                    startTime: r.start_time,
                    endTime: r.end_time,
                    status: r.status,
                    progress: r.progress,
                  })) ?? []
                }
                onRecordClick={async (id) => {
                  await router.push(`/plane/record/${id}`);
                }}
              />
            )}
          </>
        </Grid>
      </Grid>
      <Spacer height={20} />
    </Stack>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  serviceOptions.axios = axios;
  const id = context.query.id as string;
  const data = await PlaneService.retrievePlane({ id });
  const page = getPageNumber(context);

  return {
    props: {
      plane: data,
      page,
    },
  };
};
