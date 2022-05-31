import {
  Create,
  Edit,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from "@pankod/refine-antd";
import { useNavigation } from "@pankod/refine-core";
import { MaintenanceRecord, Plane } from "api-client";
import qs from "query-string";
import React from "react";

export default function CreateMaintenance() {
  const result: any = qs.parse(window.location.search);
  const { replace } = useNavigation();
  const { formProps, saveButtonProps } = useForm<MaintenanceRecord>({
    redirect: false,
    onMutationSuccess: () => {
      replace(`/plane/show/${result.plane}`);
    },
  });

  const { selectProps } = useSelect<Plane>({
    resource: "plane",
    optionLabel: "name",
    optionValue: "id",
    defaultValue: result.id,
  });

  console.log(saveButtonProps);
  return (
    //@ts-ignore
    <Create saveButtonProps={saveButtonProps}>
      <Form
        {...formProps}
        layout="vertical"
        initialValues={{
          plane: parseInt(result.plane),
          progress: "PENDING",
        }}
      >
        <Form.Item label="Name" name={"name"} required>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name={"description"} required>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Progress" name={"progress"}>
          <Select
            options={[
              {
                label: "PENDING",
                value: "PENDING",
              },
              {
                label: "IN_PROGRESS",
                value: "IN_PROGRESS",
              },
              {
                label: "FINISHED",
                value: "FINISHED",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Plane" name={"plane"}>
          <Select {...selectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
}
