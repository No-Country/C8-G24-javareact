import { Dropdown } from "flowbite-react";
import { Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import UserRegistration from "../UserRegistration/UserRegistration";
import UserLogged from "../UserLogged/UserLogged";
import userIcon from "../../assets/helpers/Images";

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
            <Avatar
              alt="User settings"
              img={userIcon}
              rounded={true}
              className="max-[380px]:w-10 max-sm:py-2"
            />
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
