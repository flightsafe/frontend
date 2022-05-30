import { EditFilled, PlusSquareFilled } from "@ant-design/icons";
import {
  AntdList,
  Button,
  Card,
  ImageField,
  PageHeader,
  Show,
  Typography,
} from "@pankod/refine-antd";
import { useList, useNavigation, useShow } from "@pankod/refine-core";
import { MaintenanceRecord, Plane } from "api-client";
import qs from "query-string";
import ActionButton from "../../actionButton";

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

  const renderItem = (item: MaintenanceRecord) => {
    return (
      <AntdList.Item
        key={item.id}
        actions={[
          <ActionButton
            key={item.id}
            icon={<EditFilled />}
            shape="circle"
            resource="maintenance"
            action="edit"
            id={item.id}
            extraData={{}}
          />,
        ]}
      >
        <AntdList.Item.Meta title={item.name} description={item.progress} />
        {item.description}
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
            <ActionButton
              key={record?.id}
              icon={<PlusSquareFilled />}
              shape="default"
              resource="maintenance"
              action="create"
              id={record?.id}
              extraData={{
                plane: record?.id,
              }}
              title={"Add new maintenance item"}
            />,
          ]}
        >
          <AntdList
            size="large"
            dataSource={maintenanceRecord.data?.data}
            loading={maintenanceRecord.isLoading}
            renderItem={renderItem}
          />
        </PageHeader>
      </Card>
    </>
  );
}
