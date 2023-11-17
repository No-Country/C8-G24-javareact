import { getAuth } from "firebase/auth";
import React, { useEffect, useContext, useState } from "react";
import LocationContext from "../../Context/LocationContext";
import { getUsersFirestore } from "../../helpers/helpers.mjs";
import { Spinner, TabsComponent } from "flowbite-react";
import { TabItem } from "flowbite-react/lib/esm/components/Tab/TabItem";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import TitleAccount from "../../TitleAccount/TitleAccount";
import UserProfile from "../../UserProfile/UserProfile";
import AdressProfile from "../../AdressProfile/AdressProfile";
import PaymentsMethodsProfile from "../../PaymentsMethodsProfile/PaymentsMethodsProfile";
import SessionProfile from "../../SessionProfile/SessionProfile";
import SpinnerContainer from "../../SpinnerContainer/SpinnerContainer";
import Layout from "../../Layout/Layout";

const UserPage = () => {
  const { authUser } = useContext(LocationContext);
  const [userDatabase, setUserDatase] = useState();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 800);

    if (authUser) {
      getUsersFirestore(authUser.uid, setUserDatase, true);
    }
  }, [authUser]);

  return (
    <div className="container mx-auto my-16 max-2xl:px-6">
      <TitleAccount title={"Perfil"} />
      {showComponent ? (
        authUser ? (
          <div className="mb-2" id="paddingTabItem">
            <TabsComponent aria-label="Tabs with underline" style="underline">
              <TabItem active={true} title="Perfil" icon={HiUserCircle}>
                {userDatabase && (
                  <UserProfile data={userDatabase} auth={authUser} />
                )}
              </TabItem>
              <TabItem
                active={false}
                title="Dirección y telefóno"
                icon={MdDashboard}
                style={{ padding: "20px" }}
              >
                {userDatabase && <AdressProfile data={userDatabase} />}
              </TabItem>
              <TabItem
                active={false}
                title="Metodos de pago"
                icon={HiAdjustments}
              >
                {userDatabase && <PaymentsMethodsProfile data={userDatabase} />}
              </TabItem>
              <TabItem
                active={false}
                title="Sesión usuario"
                icon={HiClipboardList}
              >
                {userDatabase && <SessionProfile auth={authUser} />}
              </TabItem>
            </TabsComponent>
          </div>
        ) : (
          <Layout>
            <p className="text-3xl">No conectado</p>
          </Layout>
        )
      ) : (
        <SpinnerContainer />
      )}
    </div>
  );
};

export default UserPage;
