import {
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
} from "@pankod/refine-antd";
import { Create } from "@pankod/refine-antd";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function MaintenanceList() {
  const { selectProps: planeSelection } = useSelect({
    resource: "plane",
    optionLabel: "title",
    optionValue: "id",
  });

  const { selectProps: authorSelection } = useSelect({
    resource: "user",
    optionLabel: "title",
    optionValue: "id",
  });

  const { formProps, saveButtonProps } = useForm();

  return (
    //@ts-ignore
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name" required={false}>
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
        <Form.Item label="Author" name={"author"}>
          <Select {...authorSelection} />
        </Form.Item>
      </Form>
    </Create>
  );
}
