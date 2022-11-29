import { useEffect } from "react";
import { config } from "../../config/config";
import { HomeHeader } from "./components/HomeHeader";
import { HomeBody } from "./components/HomeBody";
import { useFetchMultiple } from "../../hooks/useFetchMultiple";
import { useTempHum } from "../../hooks/useTempHum";
import { ErrorBanner } from "../../components/ErrorBanner/ErrorBanner";
import { CardLoadingSkeleton } from "../../components/CardLoadingSkeleton/CardLoadingSkeleton";
import "./home.scss";

const Home = () => {
  // FETCH DATA
  const { isLoading, data, error, refetch, setRefetch } = useFetchMultiple([
    `${config.BASE_API_URL}/data/get`,
    `${config.BASE_API_URL}/data/params`,
  ]);

  // FORMAT HOUR
  const { formatDate } = useTempHum();
  if (!isLoading && !error) {
    data[0] = formatDate(data[0]);
  }

  useEffect(() => {
    setInterval(() => {
      setRefetch(!refetch);
    }, 10000);
  }, [refetch]);

  return (
    <div className="Home">
      {/* LOADING SKELETONS */}
      {isLoading && (
        <section className="Home__header">
          {new Array(6).fill(0).map((_, index) => (
            <CardLoadingSkeleton key={index} />
          ))}
        </section>
      )}

      {error && !isLoading && <ErrorBanner error={error} />}

      {!error && !isLoading && (
        <>
          {/* HEAD*/}
          <HomeHeader data={data} refetch={refetch} />
          {/* BODY */}
          <HomeBody data={data} />
        </>
      )}
    </div>
  );
};

export { Home };
