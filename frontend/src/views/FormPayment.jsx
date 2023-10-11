import { SpinnerCircularFixed } from "spinners-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormPayment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/checkform/finish");
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col bg-[#FFF6F6] text-center items-center p-5">
      <div>
        <SpinnerCircularFixed
          size={300}
          thickness={100}
          speed={100}
          color="rgba(255, 204, 10, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
      <h1>Procesando Pago</h1>
      <div className="w-full flex flex-col items-center ">
        <div className="bg-white w-3/4 p-4 m-4">Visa **** **** **** 1515</div>
        <div className="bg-white w-3/4 p-4 m-4">Juan Perez</div>
        <p className="bg-white w-3/4 p-4 m-4">
          Alimento ProPlan x 10Kg a Lisandro de la Torre 39, Godoy Cruz-Mendoza.
          Total $7000
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
          <p>
            Todas tus operaciones bancarias son seguras
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormPayment;
