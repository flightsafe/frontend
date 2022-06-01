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
  Breadcrumb,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

import { useNavigation } from "@pankod/refine-core";
import qs from "query-string";
import React from "react";

export default function EditComment() {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: authorSelection } = useSelect({
    resource: "user",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.author?.id,
  });

  const { selectProps: lesson_historySelection } = useSelect({
    resource: "lessonhistory",
    optionLabel: "title",
    optionValue: "id",
    defaultValue: queryResult?.data?.data?.lesson_history?.id,
  });

  const initialValues = {
    ...formProps.initialValues,
    create_at: dayjs(formProps.initialValues?.create_at),
  };

  return (
    //@ts-ignore
    <Edit
      saveButtonProps={saveButtonProps}
      pageHeaderProps={{ breadcrumb: <Breadcrumb /> }}
    >
      <Form {...formProps} layout="vertical" initialValues={initialValues}>
        <Form.Item label="Comment" name="comment" required={true}>
          <Input />
        </Form.Item>

        <Form.Item label="Author" name={"author"} required={true}>
          <Select {...authorSelection} />
        </Form.Item>

        <Form.Item
          label="Lesson history"
          name={"lesson_history"}
          required={true}
        >
          <Select {...lesson_historySelection} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
