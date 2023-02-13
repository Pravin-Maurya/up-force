import { Typography, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./submittedData.css";

const SubmitedData = () => {
  const data = useSelector((state) => state.userDataSlice);
  const [userData, setUserData] = useState("");
  console.log(userData);
  useEffect(() => {
    setUserData(data?.userData);
  }, [data?.userData, userData]);

  return (
    <div className="container">
      <Typography variant="h2" className="title">
        Data added Successfully
      </Typography>

      <div className="dataContainer">
        <p className="keyName">Name</p>
        <p className="keyValue">Value</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">FirstName</p>
        <p className="keyValue">{userData?.userDetails?.firstName.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">MiddleName</p>
        <p className="keyValue">{userData?.userDetails?.middleName.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">LastName</p>
        <p className="keyValue">{userData?.userDetails?.lastName.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">MobileNo</p>
        <p className="keyValue">{userData?.userDetails?.mobileNo.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">Email</p>
        <p className="keyValue">{userData?.userDetails?.email.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">Birthday</p>
        <p className="keyValue">{userData?.userDetails?.dateOfBirth.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">Age</p>
        <p className="keyValue">{userData?.userDetails?.age.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">BloodGroup</p>
        <p className="keyValue">{userData?.userDetails?.bloodGroup.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">Height</p>
        <p className="keyValue">{userData?.userDetails?.height.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">Weight</p>
        <p className="keyValue">{userData?.userDetails?.weight.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">Gender</p>
        <p className="keyValue">{userData?.userDetails?.gender.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">MaritalStatus</p>
        <p className="keyValue">{userData?.userDetails?.maritalStatus.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">AddressLine1</p>
        <p className="keyValue">{userData?.userAddress?.addressLine1.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">AddressLine2</p>
        <p className="keyValue">{userData?.userAddress?.addressLine2.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">City</p>
        <p className="keyValue">{userData?.userAddress?.city.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">State</p>
        <p className="keyValue">{userData?.userAddress?.state.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">Country</p>
        <p className="keyValue">{userData?.userAddress?.country.value}</p>
      </div>
      <Divider />
      <div className="dataContainer">
        <p className="keyName">Pincode</p>
        <p className="keyValue">{userData?.userAddress?.pincode.value}</p>
      </div>
      <Divider />
    </div>
  );
};
export default SubmitedData;
