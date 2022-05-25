import { useApiUrl } from "@pankod/refine-core";
import {
  Create,
  Form,
  getValueFromEvent,
  Input,
  Upload,
  useForm,
} from "@pankod/refine-antd";
import { MaintenanceRecord } from "api-client";
import React from "react";

export default function CreatePlanePage() {
  const { formProps, saveButtonProps } = useForm<MaintenanceRecord>({});

  return (
    //@ts-ignore
    <Create saveButtonProps={saveButtonProps}>
      <Form
        {...formProps}
        layout="vertical"
        onFinish={(values: any) => {
          if (values.image) {
            values.image = values.image[0].originFileObj;
          }
          if (formProps.onFinish) {
            formProps.onFinish(values);
          }
        }}
      >
        <Form.Item label="Name" name={"name"} required>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name={"description"} required>
          <Input.TextArea />
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
              <p className="ant-upload-drag-icon">Drag file here</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Create>
  );
}
