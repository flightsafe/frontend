import {
  useShow,
  useList,
  useNavigation,
  useCreate,
} from "@pankod/refine-core";

import {
  Show,
  Typography,
  ImageField,
  AntdList,
  PageHeader,
  Card,
  CreateButton,
  Button,
} from "@pankod/refine-antd";
import qs from "query-string";

import { Plane, MaintenanceRecord } from "api-client";

const { Title, Text } = Typography;

export default function ShowPlanePage() {
  const { queryResult } = useShow<Plane>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const maintenanceRecord = useList<MaintenanceRecord>({
    resource: "maintenance",
    config: {
      filters: [
        {
          field: "plane",
          value: record?.id,
          operator: "eq",
        },
      ],
    },
    queryOptions: {
      enabled: !!record?.id,
    },
  });

  const { push } = useNavigation();

  const renderItem = (item: MaintenanceRecord) => {
    return (
      <AntdList.Item>
        <AntdList.Item.Meta title={item.name} />
      </AntdList.Item>
    );
  };

  return (
    <>
      {/** @ts-ignore */}
      <Show isLoading={isLoading}>
        <Title level={5}>Title</Title>
        <Text>{record?.name}</Text>
        <Title level={5}>Description</Title>
        <Text>
          <Text>{record?.description}</Text>
        </Text>
        <Title level={5}>Image</Title>
        <ImageField value={record?.image} />
      </Show>
      {/** @ts-ignore */}
      <Card style={{ marginTop: 10 }}>
        {/**@ts-ignore */}
        <PageHeader
          title="Maintenance item"
          extra={[
            <Button
              onClick={() =>
                push(
                  "/maintenance/create?" + qs.stringify({ plane: record?.id })
                )
              }
            >
              Create
            </Button>,
          ]}
        >
          <AntdList {...maintenanceRecord} renderItem={renderItem} />
        </PageHeader>
      </Card>
    </>
  );
}
