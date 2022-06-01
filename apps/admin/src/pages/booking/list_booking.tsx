import { DeleteFilled, EditFilled, PlusSquareFilled } from "@ant-design/icons";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Appointments,
  AppointmentTooltip,
  DateNavigator,
  MonthView,
  Scheduler,
  Toolbar,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Collapse, LinearProgress, Stack } from "@mui/material";
import { List, Select, useSelect } from "@pankod/refine-antd";
import { useDelete, useList } from "@pankod/refine-core";
import { BookingRecord } from "api-client";
import dayjs from "dayjs";
import React from "react";
import { Spacer } from "ui";
import ActionButton from "../../actionButton";

type CurrentViewName = "Month" | "Week" | "Day";

export default function ListBooking() {
  const { mutateAsync } = useDelete();
  const [currentDay, setCurrentDay] = React.useState(dayjs().toDate());
  const { selectProps: planeSelection } = useSelect({
    resource: "plane",
    optionLabel: "title",
    optionValue: "id",
  });

  const [visible, setVisible] = React.useState(false);
  const [currentViewName, setCurrentViewName] =
    React.useState<CurrentViewName>("Month");
  const [filters, setFilters] = React.useState<any>([
    {
      field: "time",
      operator: "eq",
      value: dayjs().format("YYYY-MM-DD"),
    },
    {
      field: "plane",
      operator: "eq",
      value: undefined,
    },
  ]);
  const { isLoading, data } = useList<BookingRecord>({
    resource: "booking",
    config: {
      filters: filters,
    },
  });
  const bookingRecords = data?.data ?? [];
  const schedulerData = bookingRecords.map((bookingRecord) => ({
    startDate: bookingRecord.start_time,
    endDate: bookingRecord.end_time,
    title: bookingRecord.plane_name,
    id: bookingRecord.id,
  }));

  const onDateChange = React.useCallback(
    (date: Date) => {
      setCurrentDay(date);
      filters[0] = {
        field: "time",
        operator: "eq",
        value: dayjs(date).format("YYYY-MM-DD"),
      };
      setFilters(filters);
    },
    [filters]
  );

  const onPlaneChange = React.useCallback(
    (value: { value: string; label: string }) => {
      filters[1] = {
        field: "plane",
        operator: "eq",
        value: value.value,
      };

      console.log(filters);
      setFilters(JSON.parse(JSON.stringify(filters)));
    },
    [filters]
  );

  const onViewChange = React.useCallback(
    (viewName: CurrentViewName) => {
      setCurrentViewName(viewName);
    },
    [currentViewName]
  );

  return (
    //@ts-ignore
    <List
      loading={true}
      pageHeaderProps={{
        extra: [
          <Select
            key={"view-switcher"}
            placeholder="View range"
            value={currentViewName}
            onChange={(value) => onViewChange(value)}
          >
            <Select.Option value={"Month"}>Month</Select.Option>
          </Select>,
          <Select
            {...planeSelection}
            key={"plane-select"}
            placeholder="Filter by plane"
            style={{ width: 300 }}
            labelInValue
            showSearch
            onChange={onPlaneChange}
          />,
          <ActionButton
            key={1}
            icon={<PlusSquareFilled />}
            shape="default"
            resource="booking"
            action="create"
            title="Create"
            id={1}
            extraData={{}}
          />,
        ],
      }}
    >
      <Collapse in={isLoading} timeout={{ exit: 2000 }} mountOnEnter>
        <LinearProgress />
      </Collapse>
      <Spacer height={20} />
      <Collapse in={!isLoading} timeout={{ enter: 1000 }}>
        {/*@ts-ignore */}
        <Scheduler data={schedulerData}>
          <ViewState
            currentDate={currentDay}
            onCurrentDateChange={onDateChange}
            currentViewName={currentViewName}
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <Appointments />
          <AppointmentTooltip
            visible={visible}
            onVisibilityChange={(visibility) => setVisible(visibility)}
            headerComponent={(props) => {
              return (
                <Stack direction={"row"} justifyContent="end" spacing={2} p={2}>
                  <ActionButton
                    key={props.appointmentData?.id}
                    icon={<EditFilled />}
                    shape="circle"
                    resource="booking"
                    action="edit"
                    id={props.appointmentData?.id}
                    extraData={{}}
                  />
                  <ActionButton
                    key={props.appointmentData?.id}
                    icon={<DeleteFilled />}
                    shape="circle"
                    resource="booking"
                    action="delete"
                    id={props.appointmentData?.id}
                    extraData={{}}
                    onDone={() => {
                      setVisible(false);
                    }}
                  />
                </Stack>
              );
            }}
          />
        </Scheduler>
      </Collapse>
    </List>
  );
}
