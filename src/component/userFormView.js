import * as React from "react";
import Box from "@mui/material/Box";

import { TextField, MenuItem, Button, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../store/userDataSlice";
import { addSteps } from "../store/stepSlice";

import "./userForm.css";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const selectGender = ["Male", "Female"];
const maritalStausOption = ["single", "Married", "Divirced", "Widowed"];

const UserFormView = () => {
  const dispatch = useDispatch();
  const [userDetailsForm, setUserDetailsForm] = useState({
    firstName: {
      value: "",
      error: false,
      errorMsg: "First Name is a required field",
    },
    middleName: {
      value: "",
      error: false,
      errorMsg: "Middle Name is a required field",
    },
    lastName: {
      value: "",
      error: false,
      errorMsg: "Last Name is a required field",
    },
    mobileNo: {
      value: "",
      error: false,
      errorMsg: "mobile No is a required field",
    },
    email: {
      value: "",
      error: false,
      errorMsg: "Email is a required field",
    },
    dateOfBirth: {
      value: null,
      error: false,
      errorMsg: "Birthday is a required field",
    },
    age: {
      value: "",
      error: false,
      errorMsg: "Age is a required field",
    },
    bloodGroup: {
      value: "",
      error: false,
      errorMsg: "Blood group is a required field",
    },
    height: {
      value: "",
      error: false,
      errorMsg: "Height is a required field",
    },
    weight: {
      value: "",
      error: false,
      errorMsg: "Weight is a required field",
    },
    gender: {
      value: "",
      error: false,
      errorMsg: "Gender is a required field",
    },
    maritalStatus: {
      value: "",
      error: false,
      errorMsg: "Gender is a required field",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "dateOfBirth") {
      setUserDetailsForm({
        ...userDetailsForm,
        [name]: {
          ...userDetailsForm[name],
          value,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formFields = Object.keys(userDetailsForm);
    let newFormValues = { ...userDetailsForm };
    let countNotError = formFields.length;
    console.log(countNotError, formFields.length);
    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = userDetailsForm[currentField].value;

      if (currentValue === "") {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true,
          },
        };

        countNotError = countNotError - 1;
      }
    }
    if (countNotError === formFields.length) {
      dispatch(addUserDetails(userDetailsForm));
      dispatch(addSteps());
    }
    setUserDetailsForm(newFormValues);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="inner-container"
      >
        <Box className="input-form">
          <TextField
            id="demo-helper-text-aligned"
            placeholder="First Name"
            label="First Name"
            name="firstName"
            fullWidth
            type="text"
            required
            value={userDetailsForm?.firstName?.value}
            onChange={handleChange}
            error={userDetailsForm?.firstName?.error}
            helperText={
              userDetailsForm?.firstName?.error &&
              userDetailsForm?.firstName?.errorMsg
            }
          />
        </Box>
        <Box className="input-form">
          <TextField
            id="demo-helper-text-aligned"
            placeholder="Middle Name"
            label="Middle Name"
            name="middleName"
            fullWidth
            type="text"
            required
            value={userDetailsForm?.middleName?.value}
            onChange={handleChange}
            error={userDetailsForm?.middleName?.error}
            helperText={
              userDetailsForm?.middleName?.error &&
              userDetailsForm?.middleName?.errorMsg
            }
          />
        </Box>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="inner-container"
      >
        <Box className="input-form">
          <TextField
            id="demo-helper-text-aligned"
            placeholder="Last Name"
            label="Last Name"
            name="lastName"
            fullWidth
            required
            value={userDetailsForm?.lastName?.value}
            onChange={handleChange}
            error={userDetailsForm?.lastName?.error}
            helperText={
              userDetailsForm?.lastName?.error &&
              userDetailsForm?.lastName?.errorMsg
            }
          />
        </Box>
        <Box className="input-form">
          <TextField
            id="demo-helper-text-aligned"
            placeholder="Mobile No"
            label="Mobile No"
            name="mobileNo"
            fullWidth
            type="number"
            required
            value={userDetailsForm?.mobileNo?.value}
            onChange={handleChange}
            error={userDetailsForm?.mobileNo?.error}
            helperText={
              userDetailsForm?.mobileNo?.error &&
              userDetailsForm?.mobileNo?.errorMsg
            }
          />
        </Box>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="inner-container"
      >
        <Box className="input-form">
          <TextField
            placeholder="Email"
            label="Email"
            name="email"
            fullWidth
            type="email"
            required
            value={userDetailsForm?.email?.value}
            onChange={handleChange}
            error={userDetailsForm?.email?.error}
            helperText={
              userDetailsForm?.email?.error && userDetailsForm?.email?.errorMsg
            }
          />
        </Box>
        <Box className="input-form">
          <DatePicker
            label="Birthday"
            placeholder="Birthday"
            name="dateOfBirth"
            required
            inputFormat="DD/MM/YYYY"
            value={userDetailsForm?.dateOfBirth?.value}
            onChange={(newValue) => {
              let value = newValue;
              console.log(value);
              setUserDetailsForm({
                ...userDetailsForm,
                dateOfBirth: {
                  ...userDetailsForm.dateOfBirth,
                  value,
                },
              });
            }}
            renderInput={(params) => (
              <TextField
                fullWidth
                {...params}
                required
                error={userDetailsForm?.dateOfBirth?.error}
                helperText={
                  userDetailsForm?.dateOfBirth?.error &&
                  userDetailsForm?.dateOfBirth?.errorMsg
                }
              />
            )}
          />
        </Box>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="inner-container"
      >
        <Box className="input-form" component="form">
          <TextField
            placeholder="Age"
            label="Age"
            name="age"
            required
            type="number"
            fullWidth
            value={userDetailsForm?.age?.value}
            onChange={handleChange}
            error={userDetailsForm?.age?.error}
            helperText={
              userDetailsForm?.age?.error && userDetailsForm?.age?.errorMsg
            }
          />
        </Box>
        <Box className="input-form" component="form">
          <TextField
            select
            label="Blood Group"
            fullWidth
            name="bloodGroup"
            required
            value={userDetailsForm?.bloodGroup?.value}
            onChange={handleChange}
            error={userDetailsForm?.bloodGroup?.error}
            helperText={
              userDetailsForm?.bloodGroup?.error &&
              userDetailsForm?.bloodGroup?.errorMsg
            }
          >
            {bloodGroups.map((data, index) => (
              <MenuItem key={index} value={data}>
                {data}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="inner-container"
      >
        <Box className="input-form">
          <TextField
            placeholder="Height"
            label="Height"
            name="height"
            type="number"
            fullWidth
            required
            value={userDetailsForm?.height?.value}
            onChange={handleChange}
            error={userDetailsForm?.height?.error}
            helperText={
              userDetailsForm?.height?.error &&
              userDetailsForm?.height?.errorMsg
            }
          />
        </Box>
        <Box className="input-form">
          <TextField
            placeholder="Weight"
            label="Weight"
            name="weight"
            type="number"
            fullWidth
            required
            value={userDetailsForm?.weight?.value}
            onChange={handleChange}
            error={userDetailsForm?.weight?.error}
            helperText={
              userDetailsForm?.weight?.error &&
              userDetailsForm?.weight?.errorMsg
            }
          />
        </Box>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="inner-container"
      >
        <Box className="input-form">
          <FormControl>
            <FormLabel
              id="row-radio-buttons-group-label"
              error={userDetailsForm?.gender?.error}
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              required
              name="gender"
              value={userDetailsForm?.gender?.value}
              onChange={handleChange}
            >
              {selectGender.map((data, index) => (
                <FormControlLabel
                  key={index}
                  value={data}
                  control={<Radio />}
                  label={data}
                />
              ))}
            </RadioGroup>
            <FormHelperText error={userDetailsForm?.gender?.error}>
              {userDetailsForm?.gender?.error &&
                userDetailsForm?.gender?.errorMsg}
            </FormHelperText>
          </FormControl>
        </Box>
        <Box className="input-form">
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              error={userDetailsForm?.maritalStatus?.error}
            >
              Marital Status
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="maritalStatus"
              value={userDetailsForm?.maritalStatus?.value}
              onChange={handleChange}
              required
              error={userDetailsForm?.maritalStatus?.error}
            >
              {maritalStausOption.map((data, index) => (
                <FormControlLabel
                  key={index}
                  value={data}
                  control={<Radio />}
                  label={data}
                />
              ))}
            </RadioGroup>
            <FormHelperText error={userDetailsForm?.maritalStatus?.error}>
              {userDetailsForm?.maritalStatus?.error &&
                userDetailsForm?.maritalStatus?.errorMsg}
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
      <div>
        <Button variant="contained" disabled={true} sx={{ margin: "10px" }}>
          Back
        </Button>
        <Button
          variant="contained"
          disabled={false}
          sx={{ margin: "10px" }}
          type="submit"
        >
          Next
        </Button>
      </div>
    </form>
  );
};
export default UserFormView;
