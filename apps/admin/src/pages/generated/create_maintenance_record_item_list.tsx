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

export default function MaintenanceRecordItemList() {
  const { selectProps: maintenance_recordSelection } = useSelect({
    resource: "maintenancerecord",
    optionLabel: "title",
    optionValue: "id",
  });

  const { selectProps: operatorSelection } = useSelect({
    resource: "user",
    optionLabel: "title",
    optionValue: "id",
  });

  const { formProps, saveButtonProps } = useForm();

  return (
    //@ts-ignore
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name" required={true}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Description" name="description" required={true}>
          <Input />
        </Form.Item>
        <Form.Item label="Image" name={"image"} required>
          <Form.Item
            name="image"
            valuePropName="file"
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="image"
              accept="image/png, image/gif, image/jpeg"
              multiple={false}
              maxCount={1}
            >
              <p className="ant-upload-drag-icon">Drag image here</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Start time" name="start_time" required={false}>
          <Input />
        </Form.Item>
        <Form.Item label="End time" name="end_time" required={false}>
          <Input />
        </Form.Item>
        <Form.Item label="Expire at" name="expire_at" required={false}>
          <Input />
        </Form.Item>
        <Form.Item label="Status" name="status" required={false}>
          <Select
            options={[
              { label: "Good Condition", value: "GOOD_CONDITION" },
              { label: "Bad Condition", value: "BAD_CONDITION" },
              { label: "Expired", value: "EXPIRED" },
            ]}
          />
        </Form.Item>
        <Form.Item label="Maintenance record" name={"maintenance_record"}>
          <Select {...maintenance_recordSelection} />
        </Form.Item>
        <Form.Item label="Operator" name={"operator"}>
          <Select {...operatorSelection} />
        </Form.Item>
      </Form>
    </Create>
  );
}
