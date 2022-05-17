// @flow
import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";

interface Data {
  id: string;
  title: string;
  imageSrc: string;
}

interface Selection {
  title: string;
  values: string[];
}

type Props = {
  pageCount: number;
  currentPage: number;
  items: Data[];
  selections: Selection[];
  onPageChange(page: number): void;
  onDetail(id: string): void;
};

export function DataGridDisplay(props: Props) {
  const { items, selections } = props;
  return (
    <Stack spacing={3} alignItems={"flex-end"}>
      <Stack direction={"row"} spacing={3} width={"100%"}>
        {selections.map((selection, index) => (
          <FormControl fullWidth key={selection.title}>
            <InputLabel>{selection.title}</InputLabel>
            <Select label={selection.title}>
              {selection.values.map((value) => (
                <MenuItem key={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Stack>
      <Grid container spacing={5}>
        {items.map((item, index) => (
          <Grid item xs={12} md={3} key={item.id}>
            <Card variant={"outlined"}>
              <CardMedia image={item.imageSrc} component={"img"} height={200} />
              <CardContent>
                <Stack alignItems={"flex-start"}>
                  {item.title}
                  <Button onClick={() => props.onDetail(item.id)}>
                    More info
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={props.pageCount}
        page={props.currentPage}
        size={"large"}
        onChange={(e, page) => props.onPageChange(page)}
      />
    </Stack>
  );
}
