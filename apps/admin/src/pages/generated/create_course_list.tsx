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

export default function CourseList() {
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
        <Form.Item label="Cover" name={"cover"} required>
          <Form.Item
            name="cover"
            valuePropName="file"
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="cover"
              accept="image/png, image/gif, image/jpeg"
              multiple={false}
              maxCount={1}
            >
              <p className="ant-upload-drag-icon">Drag image here</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Create>
  );
}
