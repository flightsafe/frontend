// @flow
import * as React from "react";
import { GetServerSideProps } from "next";
import { Plane, PlaneService, serviceOptions } from "api-client";
import axios from "axios";
import getPageNumber from "../../utils/getPageNumber";
import { DataGridDisplay, Spacer } from "ui";
import qs from "query-string";
import { interfaces } from "common";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import getPaginatedString from "../../utils/getPaginatedString";

type Props = {
  result: interfaces.Pagination<Plane>;
};

export default function Index(props: Props) {
  const router = useRouter();

  return (
    <Stack marginLeft={10}>
      <DataGridDisplay
        pageCount={props.result.totalPage}
        currentPage={props.result.currentPage}
        items={props.result.results.map((r) => ({
          title: r.name,
          imageSrc: r.image,
          id: r.id as any,
        }))}
        selections={[]}
        onDetail={async (id) => {
          await router.push(`${router.route}/${id}`);
        }}
        onPageChange={async (page) => {
          const query = router.query;
          await router.push(
            `${router.route}?${getPaginatedString(query, page)}`
          );
        }}
      />
      <Spacer height={100} />
    </Stack>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  serviceOptions.axios = axios;
  const page = getPageNumber(context);
  const data = await PlaneService.listPlanes({ page });

  return {
    props: {
      result: data,
    },
  };
};
