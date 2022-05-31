import {
  List,
  TextField,
  TagField,
  DateField,
  ImageField,
  Table,
  useTable,
  ShowButton,
  EditButton,
  DeleteButton,
  Space,
} from "@pankod/refine-antd";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function ListMaintenance() {
  const { tableProps } = useTable<any>();

  return (
    //@ts-ignore
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title="ID"
          render={(value) => <TagField value={value} />}
        />

        <Table.Column
          dataIndex="start_time"
          title="Start time"
          render={(value) => <DateField format={"LLL"} value={value} />}
        />

        <Table.Column
          dataIndex="end_time"
          title="End time"
          render={(value) => <DateField format={"LLL"} value={value} />}
        />

        <Table.Column
          dataIndex="status"
          title="Status"
          render={(value) => <TextField value={value} />}
        />

        <Table.Column
          dataIndex="title"
          title="Title"
          render={(value) => <TextField value={value} />}
        />

        <Table.Column
          dataIndex="description"
          title="Description"
          render={(value) => <TextField value={value} />}
        />

        <Table.Column
          dataIndex="progress"
          title="Progress"
          render={(value) => <TagField value={value} />}
        />

        <Table.Column
          dataIndex="plane"
          title="Plane"
          render={(value) => <TagField value={value} />}
        />

        <Table.Column
          dataIndex={"actions"}
          render={(_text, record: any): React.ReactNode => (
            <Space>
              <ShowButton size="small" recordItemId={record.id} hideText />
              <EditButton size="small" recordItemId={record.id} hideText />
              <DeleteButton size="small" recordItemId={record.id} hideText />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
