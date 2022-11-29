import { DataTable } from "../../../components/DataTable/DataTable";
import { LineChart } from "../../../components/LineChart/LineChart";
import { useTempHum } from "../../../hooks/useTempHum";
import { data } from "../../../config/data";

const HomeBody = ({ data: entries }) => {
  const { getRawDataFromEntries } = useTempHum();

  const { temperatureData, humidityData, dates } = getRawDataFromEntries(
    entries[0]
  );

  // MAX TEMPERATURE && HUMIDITY
  const maxTemp = Math.max(...temperatureData);
  const maxHum = Math.max(...humidityData);

  // MIN TEMPERATURE && HUMIDITY
  const minTemp = Math.min(...temperatureData);
  const minHum = Math.min(...humidityData);

  // DATA SETS
  const tempDatasets = [
    {
      label: data.labels.temperature.title,
      data: temperatureData,
      fill: false,
      borderColor: data.labels.temperature.color,
      tension: 0.1,
    },
  ];
  const humDatasets = [
    {
      label: data.labels.humidity.title,
      data: humidityData,
      fill: false,
      borderColor: data.labels.humidity.color,
      tension: 0.1,
    },
  ];

  const tempScales = {
    max: maxTemp + 5,
    min: minTemp - 5,
  };

  const humScales = {
    max: maxHum + 5,
    min: minHum - 5,
  };

  return (
    <section className="Home__body">
      <DataTable
        headers={["Hora", "Temperatura", "Humedad"]}
        data={entries[0].slice(0, 1440)}
        params={entries[1][0]}
      />
      <div className="Home__body-charts">
        <LineChart
          title="Temperatura - Historial Diario"
          datasets={tempDatasets}
          labels={dates}
          scales={tempScales}
        />
        <LineChart
          title="Humedad - Historial Diario"
          datasets={humDatasets}
          labels={dates}
          scales={humScales}
        />
      </div>
    </section>
  );
};

export { HomeBody };
