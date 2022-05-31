import { Show, Typography, ImageField } from "@pankod/refine-antd";
import { useShow, useOne } from "@pankod/refine-core";

const { Title, Text } = Typography;

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function DetailPlane() {
  const { queryResult } = useShow<any>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    //@ts-ignore
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Image</Title>
      <ImageField value={record?.image} width={"50%"} />

      <Title level={5}>Created time</Title>
      <Text>{record?.created_time}</Text>

      <Title level={5}>Updated time</Title>
      <Text>{record?.updated_time}</Text>
    </Show>
  );
}
