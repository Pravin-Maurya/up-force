import HorizontalStepper from "./component/stepper";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import FormContainer from "./component/formContainer";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormContainer />
    </LocalizationProvider>
  );
}

export default App;
