import { Show, Typography, ImageField, Breadcrumb } from "@pankod/refine-antd";
import { useShow, useOne } from "@pankod/refine-core";

const { Title, Text } = Typography;

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function DetailMaintenanceRecordItem() {
  const { queryResult } = useShow<any>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: maintenance_recordSelection } = useOne({
    resource: "maintenancerecord",
    id: record?.maintenance_record,
    queryOptions: {
      enabled: !!record?.maintenance_record,
    },
  });

  const { data: operatorSelection } = useOne({
    resource: "user",
    id: record?.operator,
    queryOptions: {
      enabled: !!record?.operator,
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

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>Image</Title>
      <ImageField value={record?.image} width={"50%"} />

      <Title level={5}>Start time</Title>
      <Text>{record?.start_time}</Text>

      <Title level={5}>End time</Title>
      <Text>{record?.end_time}</Text>

      <Title level={5}>Expire at</Title>
      <Text>{record?.expire_at}</Text>

      <Title level={5}>Status</Title>
      <Text>{record?.status}</Text>

      <Title level={5}>Maintenance record</Title>
      <Text>{maintenance_recordSelection?.data?.title}</Text>

      <Title level={5}>Operator</Title>
      <Text>{operatorSelection?.data?.title}</Text>
    </Show>
  );
}
