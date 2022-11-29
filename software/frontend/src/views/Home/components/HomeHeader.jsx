import { useEffect } from "react";
import { CurrentCard } from "../../../components/CurrentCard/CurrentCard";
import { AverageCard } from "../../../components/AverageCard/AverageCard";
import { AlertCard } from "../../../components/AlertCard/AlertCard";
import { useTempHum } from "../../../hooks/useTempHum";
import { useGeneral } from "../../../context/GeneralContext";

const HomeHeader = ({ data, refetch }) => {
  const { setAlert, setAlertData } = useGeneral();
  const { getRawDataFromEntries } = useTempHum();
  const { temperatureData, humidityData } = getRawDataFromEntries(data[0]);

  // AVERAGE TEMPERATURE && HUMIDITY
  const averageTemp =
    temperatureData.reduce((a, b) => a + b, 0) / temperatureData.length;
  const averageHum =
    humidityData.reduce((a, b) => a + b, 0) / humidityData.length;

  // MAX TEMPERATURE && HUMIDITY
  const maxTemp = Math.max(...temperatureData);
  const maxHum = Math.max(...humidityData);

  // MIN TEMPERATURE && HUMIDITY
  const minTemp = Math.min(...temperatureData);
  const minHum = Math.min(...humidityData);

  // PARAMS
  const maxTempParam = data[1][0].maxTemp;
  const maxHumParam = data[1][0].maxHum;

  // ALARMS
  let alerts = 0;
  data[0].forEach((value) => {
    return value.temperature > maxTempParam || value.humidity > maxHumParam
      ? alerts++
      : null;
  });

  useEffect(() => {
    setAlert(false);
    if (
      temperatureData[temperatureData.length - 1] > maxTempParam ||
      humidityData[humidityData.length - 1] > maxHumParam
    ) {
      setAlert(true);
      setAlertData({
        temperature: temperatureData[temperatureData.length - 1],
        humidity: humidityData[humidityData.length - 1],
      });
    }
  }, [refetch]);

  return (
    <section className="Home__header">
      <>
        <CurrentCard
          title="Temperatura Actual"
          description="Límite máximo de temperatura"
          value={temperatureData[temperatureData.length - 1]}
          symbol="° C"
          params={data[1][0]}
          id="maxTemp"
        />
        <CurrentCard
          title="Humedad Actual"
          description="Límite máximo de humedad"
          value={humidityData[humidityData.length - 1]}
          symbol="%"
          params={data[1][0]}
          id="maxHum"
        />
        <AlertCard
          value={alerts}
          tempValue={maxTemp > maxTempParam ? maxTemp : null}
          tempSymbol={maxTemp > maxTempParam ? "° C" : null}
          humValue={maxHum > maxHumParam ? maxHum : null}
          humSymbol={maxHum > maxHumParam ? "%" : null}
        />
        <AverageCard
          title="Temperatura Promedio"
          value={averageTemp.toFixed(2)}
          symbol="° C"
          max={maxTempParam}
          maxValue={maxTemp}
          minValue={minTemp}
        />
        <AverageCard
          title="Humedad Promedio"
          value={averageHum.toFixed(2)}
          symbol="%"
          max={maxHumParam}
          maxValue={maxHum}
          minValue={minHum}
        />
      </>
    </section>
  );
};

export { HomeHeader };
