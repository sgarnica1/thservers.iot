import { useEffect } from "react";
import { useGeneral } from "../../context/GeneralContext";
import { AlertBanner } from "../../components/AlertBanner/AlertBanner";
import "./dashboard.scss";

const Dashboard = ({ children }) => {
  const { alert, alertData } = useGeneral();

  useEffect(() => {}, [alert]);

  return (
    <section className="Dashboard">
      {children[0]}
      <main className="Dashboard__container">
        {alert && (
          <AlertBanner
            temperature={alertData.temperature}
            humidity={alertData.humidity}
          />
        )}
        <h1 className="Dashboard__welcome">Dashboard</h1>
        <p className="Dashboard__date">{Date()}</p>
        <p className="Dashboard__description">
          Temperatura y humedad del centro de datos
        </p>

        {children[1]}
      </main>
    </section>
  );
};

export { Dashboard };
