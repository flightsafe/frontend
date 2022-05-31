import { Show, Typography, ImageField } from "@pankod/refine-antd";
import { useShow, useOne } from "@pankod/refine-core";

const { Title, Text } = Typography;

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function DetailMaintenance() {
  const { queryResult } = useShow<any>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: planeSelection } = useOne({
    resource: "plane",
    id: record?.plane,
    queryOptions: {
      enabled: !!record?.plane,
    },
  });

  return (
    //@ts-ignore
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Start time</Title>
      <Text>{record?.start_time}</Text>

      <Title level={5}>End time</Title>
      <Text>{record?.end_time}</Text>

      <Title level={5}>Status</Title>
      <Text>{record?.status}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>Progress</Title>
      <Text>{record?.progress}</Text>

      <Title level={5}>Plane</Title>
      <Text>{planeSelection?.data?.title}</Text>
    </Show>
  );
}
