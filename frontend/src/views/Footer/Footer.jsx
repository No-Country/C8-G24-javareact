import { Footer } from "flowbite-react";
import SocialNetworks from "../YellowBar/SocialNetworks";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <>
      <Footer container={true} className="rounded-none">
        <div className="w-full text-center">
          <div className="w-full justify-between flex items-center">
            <Link to={'/'} className="flex flex-row">
              <div className="flex flex-col justify-end mb-2 text-black font-logoFont gap-2 mr-44 max-lg:mr-0">
                <p className="text-4xl">KAI</p>
                <p className="text-4xl">PET</p>
              </div>
            </Link>
            <Footer.LinkGroup className="gap-1 font-fontGotu">
              <Footer.Link href="#">Perros</Footer.Link>
              <Footer.Link href="#">Gatos</Footer.Link>
              <Footer.Link href="#">Otros</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <div className="w-full sm:justify-between flex max-sm:flex-col-reverse max-sm:items-center max-sm:gap-5">
            <Footer.Copyright href="#" by="KAIPET™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <SocialNetworks />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Footers;
