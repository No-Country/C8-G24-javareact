import { Button } from "flowbite-react";
import Success from "../assets/success.png";
import { useNavigate } from "react-router-dom";

function Finish() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-[#FFF6F6] text-center items-center p-28">
      <img src={Success} alt="finish" />
      <p className="m-10">
        Enviaremos un e-mail de confimación a tu correo electrónico.
      </p>
      <div className="flex flex-row m-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
        <p>Todas tus operaciones bancarias son seguras</p>
      </div>
      <Button className="mt-2" onClick={() => navigate("/")}>Volver al inicio</Button>
    </div>
  );
}

export default Finish;
