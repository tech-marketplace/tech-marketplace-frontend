import React from "react";
import PartnershipRequestForm from "../components/Forms/PartnershipRequestForm";
import Requestbtn from "../components/Buttons/Actionbtns/Requestbtn";
import Navbar from "../components/Navbar";
// import '../sassfiles/pages/_partnershiprequest.scss'

function PartnershipRequestPage() {
  return (
    <div>
      <Navbar />
      <h1>Partnership Request Form</h1>
      <PartnershipRequestForm />
      <Requestbtn />
    </div>
  );
}

export default PartnershipRequestPage;
