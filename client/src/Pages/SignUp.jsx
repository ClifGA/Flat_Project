import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const formdata = {
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      phone: phone,
      address: address,
      DOB: date,
    };
    fetch(`http://127.0.0.1:5000/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-full max-w-screen-lg sm:w-96 bg-center mx-auto flex flex-col items-center">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          onSubmit={handleRegister}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              onChange={(e) => setFirstName(e.target.value)}
              size="lg"
              label="First Name"
            />
            <Input
              onChange={(e) => setLastName(e.target.value)}
              size="lg"
              label="Last Name"
            />
            <Input
              onChange={(e) => setEmailAddress(e.target.value)}
              size="lg"
              label="Email"
            />
            <Input
              onChange={(e) => setPhoneNum(e.target.value)}
              size="lg"
              label="Phone Number"
            />
            <Input
              onChange={(e) => setAddress(e.target.value)}
              size="lg"
              label="Address"
            />
            <Input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              size="lg"
              label="Date of Birth"
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
}
