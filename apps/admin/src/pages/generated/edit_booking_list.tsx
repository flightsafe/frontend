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

export default function EditBooking() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: planeSelection } = useSelect({
    resource: "plane",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.plane?.id,
  });

  const { selectProps: lessonSelection } = useSelect({
    resource: "lessonhistory",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.lesson?.id,
  });

  const initialValues = {
    ...formProps.initialValues,
    start_time: dayjs(formProps.initialValues?.start_time),
    end_time: dayjs(formProps.initialValues?.end_time),
  };

  return (
    //@ts-ignore
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" initialValues={initialValues}>
        <Form.Item label="Start time" name="start_time" required={true}>
          <DatePicker showTime />
        </Form.Item>

        <Form.Item label="End time" name="end_time" required={true}>
          <DatePicker showTime />
        </Form.Item>

        <Form.Item label="Plane" name={"plane"} required={true}>
          <Select {...planeSelection} />
        </Form.Item>

        <Form.Item label="Lesson" name={"lesson"} required={false}>
          <Select {...lessonSelection} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
