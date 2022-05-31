import { DeleteFilled, EditFilled } from "@ant-design/icons";
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
import { List } from "@pankod/refine-antd";
import { useDelete, useList } from "@pankod/refine-core";
import { BookingRecord } from "api-client";
import dayjs from "dayjs";
import React from "react";
import { Spacer } from "ui";
import ActionButton from "../../actionButton";

export default function ListBooking() {
  const { mutateAsync } = useDelete();
  const [currentDay, setCurrentDay] = React.useState(dayjs().toDate());
  const [visible, setVisible] = React.useState(false);
  const [filters, setFilters] = React.useState<any>([
    {
      field: "time",
      operator: "eq",
      value: dayjs().format("YYYY-MM-DD"),
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

  return (
    //@ts-ignore
    <List loading={true}>
      <Collapse in={isLoading} timeout={{ exit: 2000 }} mountOnEnter>
        <LinearProgress />
      </Collapse>
      <Spacer height={20} />
      <Collapse in={!isLoading} timeout={{ enter: 1000 }}>
        {/*@ts-ignore */}
        <Scheduler data={schedulerData}>
          <ViewState
            currentDate={currentDay}
            onCurrentDateChange={(currentDate) => {
              setCurrentDay(currentDate);
              setFilters([
                {
                  field: "time",
                  operator: "eq",
                  value: dayjs(currentDate).format("YYYY-MM-DD"),
                },
              ]);
            }}
          />
          <MonthView />
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <Appointments />
          <AppointmentTooltip
            visible={visible}
            onVisibilityChange={(visibility) => setVisible(visibility)}
            headerComponent={(props) => {
              return (
                <Stack direction={"row"} justifyContent="end" spacing={2}>
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
