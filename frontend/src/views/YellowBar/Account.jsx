import { Dropdown } from "flowbite-react";
import { Avatar, Label, TextInput, Checkbox, Button } from "flowbite-react";
import user from "../../assets/vectors/user.svg";
import React, { useEffect, useState } from "react";
import UserRegistration from "../UserRegistration/UserRegistration";
import UserLogged from "../UserLogged/UserLogged";
const Account = () => {
  const [registerUser, setRegisterUser] = useState();

  useEffect(() => {
    setRegisterUser(true);
  }, []);

  return (
    <>
      <Dropdown
        label={
          <>
            <Avatar alt="User settings" img={user} rounded={true}  />
            <div>
              <p className="text-xs sm:text-sm max-sm:hidden">MI CUENTA</p>
            </div>
          </>
        }
        class="hover:bg-yellow-200 rounded"
      >
        {registerUser ? (
          <UserLogged
            registerUser={registerUser}
            setRegisterUser={setRegisterUser}
          />
        ) : (
          <UserRegistration
            registerUser={registerUser}
            setRegisterUser={setRegisterUser}
          />
        )}
      </Dropdown>
    </>
  );
};

export default Account;
