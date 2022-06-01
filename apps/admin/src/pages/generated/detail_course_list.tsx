import { Show, Typography, ImageField, Breadcrumb } from "@pankod/refine-antd";
import { useShow, useOne } from "@pankod/refine-core";

const { Title, Text } = Typography;

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function DetailCourse() {
  const { queryResult } = useShow<any>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    //@ts-ignore
    <Show
      isLoading={isLoading}
      pageHeaderProps={{ breadcrumb: <Breadcrumb /> }}
    >
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>Cover</Title>
      <ImageField value={record?.cover} width={"50%"} />
    </Show>
  );
}
