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

export default function TransactionList() {
  const { selectProps: userSelection } = useSelect({
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
          <Select
            options={[
              { label: "Create Booking", value: "CREATE_BOOKING" },
              { label: "Delete Booking", value: "DELETE_BOOKING" },
              { label: "Create Lesson Record", value: "CREATE_LESSON_RECORD" },
              { label: "Create Comment", value: "CREATE_COMMENT" },
              { label: "Add Maintenance Item", value: "ADD_MAINTENANCE_ITEM" },
              {
                label: "Change Maintenance Status",
                value: "CHANGE_MAINTENANCE_STATUS",
              },
              { label: "Start Maintenance", value: "START_MAINTENANCE" },
              { label: "End Maintenance", value: "END_MAINTENANCE" },
            ]}
          />
        </Form.Item>
        <Form.Item label="Details" name="details" required={false}>
          <Input />
        </Form.Item>
        <Form.Item label="User" name={"user"}>
          <Select {...userSelection} />
        </Form.Item>
      </Form>
    </Create>
  );
}
