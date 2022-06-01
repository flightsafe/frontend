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

export default function ListComment() {
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
          dataIndex="comment"
          title="Comment"
          render={(value) => <TextField value={value} />}
        />

        <Table.Column
          dataIndex="create_at"
          title="Create at"
          render={(value) => <DateField format={"LLL"} value={value} />}
        />

        <Table.Column
          dataIndex="author"
          title="Author"
          render={(value) => <TagField value={value} />}
        />

        <Table.Column
          dataIndex="lesson_history"
          title="Lesson history"
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
