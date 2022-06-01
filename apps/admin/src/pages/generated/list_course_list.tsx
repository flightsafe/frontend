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
  Breadcrumb,
} from "@pankod/refine-antd";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function ListCourse() {
  const { tableProps } = useTable<any>();

  return (
    //@ts-ignore
    <List pageHeaderProps={{ breadcrumb: <Breadcrumb /> }}>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title="ID"
          render={(value) => <TagField value={value} />}
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
          dataIndex="cover"
          title="Cover"
          render={(value) => <ImageField value={value} width={300} />}
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
