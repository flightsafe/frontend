import { Show, Typography, ImageField } from "@pankod/refine-antd";
import { useShow, useOne } from "@pankod/refine-core";

const { Title, Text } = Typography;

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function DetailTransaction() {
  const { queryResult } = useShow<any>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: userSelection } = useOne({
    resource: "user",
    id: record?.user,
    queryOptions: {
      enabled: !!record?.user,
    },
  });

  return (
    //@ts-ignore
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Details</Title>
      <Text>{record?.details}</Text>

      <Title level={5}>Created time</Title>
      <Text>{record?.created_time}</Text>

      <Title level={5}>User</Title>
      <Text>{userSelection?.data?.title}</Text>
    </Show>
  );
}
