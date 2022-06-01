import { Show, Typography, ImageField, Breadcrumb } from "@pankod/refine-antd";
import { useShow, useOne } from "@pankod/refine-core";

const { Title, Text } = Typography;

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function DetailComment() {
  const { queryResult } = useShow<any>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: authorSelection } = useOne({
    resource: "user",
    id: record?.author,
    queryOptions: {
      enabled: !!record?.author,
    },
  });

  const { data: lesson_historySelection } = useOne({
    resource: "lessonhistory",
    id: record?.lesson_history,
    queryOptions: {
      enabled: !!record?.lesson_history,
    },
  });

  return (
    //@ts-ignore
    <Show
      isLoading={isLoading}
      pageHeaderProps={{ breadcrumb: <Breadcrumb /> }}
    >
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Comment</Title>
      <Text>{record?.comment}</Text>

      <Title level={5}>Create at</Title>
      <Text>{record?.create_at}</Text>

      <Title level={5}>Author</Title>
      <Text>{authorSelection?.data?.title}</Text>

      <Title level={5}>Lesson history</Title>
      <Text>{lesson_historySelection?.data?.title}</Text>
    </Show>
  );
}
