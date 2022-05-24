import {
  Create,
  Form,
  Input,
  PageHeader,
  Select,
  useForm,
  useSelect,
} from "@pankod/refine-antd";
import React from "react";

import { MaintenanceRecord, Plane } from "api-client";
import { useCreate } from "@pankod/refine-core";
import qs from "query-string";

export default function CreateMaintenance() {
  const { formProps, saveButtonProps, queryResult } =
    useForm<MaintenanceRecord>();
  const result: any = qs.parse(window.location.search);
  const { selectProps } = useSelect<Plane>({
    resource: "plane",
    optionLabel: "name",
    optionValue: "id",
    defaultValue: 1,
  });

  return (
    //@ts-ignore
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name={"name"}>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name={"description"}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Progress" name={"progress"}>
          <Select
            options={[
              {
                label: "PENDING",
                value: "PENDING",
              },
              {
                label: "IN_PROGRESS",
                value: "IN_PROGRESS",
              },
              {
                label: "FINISHED",
                value: "FINISHED",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Plane" name={["plane", "id"]}>
          <Select {...selectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
}
