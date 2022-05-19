// @flow
import * as React from "react";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { router } from "next/client";

type Props = {
  title: string;
  action?: JSX.Element;
  routes: { title: string; link: string }[];
};

export function PageTitle(props: Props) {
  const { title, action, routes } = props;

  return (
    <>
      <title>{title}</title>
      <Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant={"h4"} fontWeight={"bolder"}>
            {title}
          </Typography>
          {action}
        </Stack>
        <Breadcrumbs>
          {routes.map((r, index) => (
            <Link key={r.title} underline={"hover"} href={r.link}>
              {r.title}
            </Link>
          ))}
        </Breadcrumbs>
      </Stack>
    </>
  );
}
