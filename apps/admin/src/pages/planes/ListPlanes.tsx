import React from "react";
import {
  List,
  TextField,
  TagField,
  DateField,
  ImageField,
  Table,
  useTable,
  ShowButton,
} from "@pankod/refine-antd";
import { Plane } from "api-client";

export default function ListPlanesPage() {
  const { tableProps } = useTable<Plane>();

  return (
    //@ts-ignore
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="title" title="title" />
        <Table.Column
          dataIndex="name"
          title="name"
          render={(value) => <TagField value={value} />}
        />

        <Table.Column
          dataIndex="image"
          title="Image"
          render={(value) => <ImageField value={value} width={300} />}
        />
        <Table.Column
          dataIndex="created_time"
          title="Created time"
          render={(value) => <DateField format={"LLL"} value={value} />}
        />
        <Table.Column
          dataIndex="updated_time"
          title="Updated time"
          render={(value) => <DateField format={"LLL"} value={value} />}
        />
        <Table.Column<Plane>
          dataIndex={"actions"}
          render={(_text, record): React.ReactNode => {
            return (
              <ShowButton size="small" recordItemId={record.id} hideText />
            );
          }}
        />
      </Table>
    </List>
  );
}
