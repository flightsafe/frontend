import {
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  getValueFromEvent,
  Upload,
  Edit,
  DatePicker,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function EditMaintenanceRecordItem() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: maintenance_recordSelection } = useSelect({
    resource: "maintenancerecord",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.maintenance_record?.id,
  });

  const { selectProps: operatorSelection } = useSelect({
    resource: "user",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.operator?.id,
  });

  const initialValues = {
    ...formProps.initialValues,
    start_time: dayjs(formProps.initialValues?.start_time),
    end_time: dayjs(formProps.initialValues?.end_time),
    expire_at: dayjs(formProps.initialValues?.expire_at),
  };

  return (
    //@ts-ignore
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" initialValues={initialValues}>
        <Form.Item label="Title" name="title" required={true}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Description" name="description" required={true}>
          <Input />
        </Form.Item>

        <Form.Item label="Image" name={"image"} required={false}>
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
          <DatePicker showTime />
        </Form.Item>

        <Form.Item label="End time" name="end_time" required={false}>
          <DatePicker showTime />
        </Form.Item>

        <Form.Item label="Expire at" name="expire_at" required={false}>
          <DatePicker showTime />
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

        <Form.Item
          label="Maintenance record"
          name={"maintenance_record"}
          required={true}
        >
          <Select {...maintenance_recordSelection} />
        </Form.Item>

        <Form.Item label="Operator" name={"operator"} required={false}>
          <Select {...operatorSelection} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
