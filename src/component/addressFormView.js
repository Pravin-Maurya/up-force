import * as React from "react";
import Box from "@mui/material/Box";

import { TextField, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import stateData from "../data/stateData.json";
import citiesData from "../data/citiesData.json";
import { useDispatch } from "react-redux";
import { addSteps, reduceStep } from "../store/stepSlice";
import { addAddress } from "../store/userDataSlice";

import "./userForm.css";

const country = ["India"];
const AddressFormView = () => {
  const dispatch = useDispatch();
  const [addressForm, setAddressForm] = useState({
    addressLine1: {
      value: "",
      error: false,
      errorMsg: "Address line 1 is a required field",
    },
    addressLine2: {
      value: "",
      error: false,
      errorMsg: "Address line 2 is a required field",
    },
    city: {
      value: "",
      error: false,
      errorMsg: "City is a required field",
    },
    state: {
      value: "",
      error: false,
      errorMsg: "State is a required field",
    },
    country: {
      value: "",
      error: false,
      errorMsg: "Country is a required field",
    },
    pincode: {
      value: "",
      error: false,
      errorMsg: "pincode is a required field",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressForm({
      ...addressForm,
      [name]: {
        ...addressForm[name],
        value,
      },
    });
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    const formFields = Object.keys(addressForm);
    let newFormValues = { ...addressForm };
    let countNotError = formFields.length;

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = addressForm[currentField].value;

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
      dispatch(addAddress(addressForm));
      dispatch(addSteps());
    }
    setAddressForm(newFormValues);
  };

  return (
    <form className="container">
      <Box component="form" noValidate className="inner-container">
        <Box className="input-form">
          <TextField
            placeholder="Address Line 1"
            label="Address Line 1"
            fullWidth
            required
            name="addressLine1"
            value={addressForm?.addressLine1?.value}
            onChange={handleChange}
            error={addressForm?.addressLine1?.error}
            helperText={
              addressForm?.addressLine1?.error &&
              addressForm?.addressLine1?.errorMsg
            }
          />
        </Box>
        <Box className="input-form">
          <TextField
            placeholder="Address Line 2"
            label="Address Line 2"
            name="addressLine2"
            fullWidth
            required
            value={addressForm?.addressLine2.value}
            onChange={handleChange}
            error={addressForm?.addressLine2.error}
            helperText={
              addressForm?.addressLine2.error &&
              addressForm?.addressLine2.errorMsg
            }
          />
        </Box>
      </Box>

      <Box component="form" noValidate className="inner-container">
        <Box className="input-form">
          <TextField
            placeholder="City"
            label="City"
            name="city"
            fullWidth
            select
            required
            value={addressForm?.city.value}
            onChange={handleChange}
            error={addressForm?.city.error}
            helperText={addressForm?.city.error && addressForm?.city.errorMsg}
          >
            {citiesData.map((data, index) => (
              <MenuItem key={index} value={data}>
                {data}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box className="input-form">
          <TextField
            select
            label="State"
            name="state"
            fullWidth
            required
            value={addressForm?.state.value}
            onChange={handleChange}
            error={addressForm?.state.error}
            helperText={addressForm?.state.error && addressForm?.state.errorMsg}
          >
            {stateData.map((data, index) => (
              <MenuItem key={index} value={data}>
                {data}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box component="form" noValidate className="inner-container">
        <Box className="input-form">
          <TextField
            placeholder="Country"
            label="Country"
            name="country"
            fullWidth
            select
            required
            value={addressForm?.country.value}
            onChange={handleChange}
            error={addressForm?.country.error}
            helperText={
              addressForm?.country.error && addressForm?.country.errorMsg
            }
          >
            {country.map((data, index) => (
              <MenuItem key={index} value={data}>
                {data}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box className="input-form">
          <TextField
            placeholder="Pincode"
            label="Pincode"
            name="pincode"
            type="number"
            fullWidth
            required
            value={addressForm?.pincode.value}
            onChange={handleChange}
            error={addressForm?.pincode.error}
            helperText={
              addressForm?.pincode.error && addressForm?.pincode.errorMsg
            }
          />
        </Box>
      </Box>
      <div>
        <Button
          variant="contained"
          sx={{ margin: "10px" }}
          onClick={() => dispatch(reduceStep())}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "10px" }}
          onClick={handleNextButton}
        >
          Next
        </Button>
      </div>
    </form>
  );
};
export default AddressFormView;
