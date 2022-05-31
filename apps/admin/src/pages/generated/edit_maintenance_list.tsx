import {
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
  Edit,
} from "@pankod/refine-antd";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function EditMaintenance() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: planeSelection } = useSelect({
    resource: "plane",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.plane?.id,
  });

  return (
    //@ts-ignore
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Title" name="title" required={false}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Description" name="description" required={true}>
          <Input />
        </Form.Item>

        <Form.Item label="Progress" name="progress" required={false}>
          <Select
            options={[
              { label: "Pending", value: "PENDING" },
              { label: "In Progress", value: "IN_PROGRESS" },
              { label: "Finished", value: "FINISHED" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Plane" name={"plane"}>
          <Select {...planeSelection} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
