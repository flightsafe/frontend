// @flow
import { Formik } from "formik";
import * as React from "react";
import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { Spacer } from "../common";
import { LoadingButton } from "@mui/lab";
import { AuthenticationContext } from "model";

type Props = {};

export function LoginDisplay(props: Props) {
  const { signIn } = React.useContext(AuthenticationContext);

  return (
    <div style={{ height: "100%" }}>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.username) {
            errors.username = "Username is Required";
          }
          if (!values.password) {
            errors.password = "Password is Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await signIn(values.username, values.password);
          } catch (e: any) {
            setErrors({
              password: `${e?.response?.data?.detail ?? e.toString()}`,
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} style={{ height: "100%" }}>
            <Stack
              height={"100%"}
              justifyContent={"center"}
              justifyItems={"center"}
              spacing={2}
              p={2}
            >
              <Typography variant={"h5"} fontWeight={"bolder"}>
                Sign in to FlightSafe
              </Typography>
              <Typography variant={"subtitle1"}>
                Enter your details below
              </Typography>
              {errors.username && (
                <Alert severity={"error"}>{errors.username}</Alert>
              )}

              {errors.password && (
                <Alert severity={"error"}>{errors.password}</Alert>
              )}
              <TextField
                label={"Username"}
                id={"username"}
                name={"username"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <TextField
                label={"Password"}
                id={"password"}
                name={"password"}
                type={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <LoadingButton
                type="submit"
                variant={"contained"}
                style={{ borderRadius: 10, padding: 15 }}
                loading={isSubmitting}
              >
                Submit
              </LoadingButton>
              <Spacer height={100} />
            </Stack>
          </form>
        )}
      </Formik>
    </div>
  );
}
