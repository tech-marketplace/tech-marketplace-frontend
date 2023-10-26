import React from "react";
import ProfileForm from "../components/Forms/ProfileForm";
import Savebtn from "../components/Buttons/Actionbtns/Savebtn";
import Navbar from "../components/Navbar";
// import '../sassfiles/pages/_profile.scss'

function ProfilePage() {
  return (
    <div>
      <Navbar />
      <ProfileForm />
      <Savebtn />
    </div>
  );
}

export default ProfilePage;
