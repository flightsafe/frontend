import { Show, Typography, ImageField } from "@pankod/refine-antd";
import { useShow, useOne } from "@pankod/refine-core";

const { Title, Text } = Typography;

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function DetailLesson() {
  const { queryResult } = useShow<any>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: courseSelection } = useOne({
    resource: "course",
    id: record?.course,
    queryOptions: {
      enabled: !!record?.course,
    },
  });

  return (
    //@ts-ignore
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>Course</Title>
      <Text>{courseSelection?.data?.title}</Text>
    </Show>
  );
}