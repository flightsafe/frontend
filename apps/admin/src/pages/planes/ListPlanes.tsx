import React from "react";
import {
  List,
  TextField,
  TagField,
  DateField,
  Table,
  useTable,
} from "@pankod/refine-antd";
import { Plane } from "api-client";

export default function ListPlanesPage() {
  const { tableProps } = useTable<Plane>();
  console.log(tableProps);

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
          dataIndex="description"
          title="description"
          render={(value) => <DateField format="LLL" value={value} />}
        />
      </Table>
    </List>
  );
}
