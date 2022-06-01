import {
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
  Create,
  DatePicker,
  Breadcrumb,
} from "@pankod/refine-antd";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function CreateCourse() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  return (
    //@ts-ignore
    <Create
      saveButtonProps={saveButtonProps}
      pageHeaderProps={{ breadcrumb: <Breadcrumb /> }}
    >
      <Form {...formProps} layout="vertical">
        <Form.Item label="Title" name="title" required={true}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Description" name="description" required={true}>
          <Input />
        </Form.Item>

        <Form.Item label="Cover" name={"cover"} required={false}>
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
