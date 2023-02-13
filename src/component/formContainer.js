import AddressFormView from "./addressFormView";
import UserFormView from "./userFormView";
import HorizontalStepper from "./stepper";
import { useSelector } from "react-redux";
import SubmitedData from "./submittedData";

const FormContainer = () => {
  const { activeStep } = useSelector((state) => state.stepSlice);

  return (
    <div>
      <HorizontalStepper step={activeStep} />
      {activeStep === 0 && <UserFormView />}
      {activeStep === 1 && <AddressFormView />}
      {activeStep === 2 && <SubmitedData />}
    </div>
  );
};
export default FormContainer;
