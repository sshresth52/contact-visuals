import React from "react";
import { useWorldData, useCountryData, useGraphData } from "../api";
import { LineGraph, Map } from "../components";

const ChartsAndMapsPage: React.FC = () => {
  const worldDataQuery = useWorldData();
  const countryDataQuery = useCountryData();
  const graphDataQuery = useGraphData();

  if (
    worldDataQuery.isLoading ||
    countryDataQuery.isLoading ||
    graphDataQuery.isLoading
  )
    return <div>Loading...</div>;

  if (
    worldDataQuery.isError ||
    countryDataQuery.isError ||
    graphDataQuery.isError
  )
    return <div>Error fetching data</div>;

  const worldData = worldDataQuery.data;
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Charts And Maps</h1>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">COVID-19 Dashboard</h2>
        <p>Worldwide Data</p>
        <p>Total Cases: {worldData.cases}</p>
        <p>Total Active Cases: {worldData.active}</p>
        <p>Total Recovered: {worldData.recovered}</p>
      </div>

      <div className="border-8 border-white shadow-xl w-full lg:w-3/4 mb-8">
        <Map countries={countryDataQuery.data} />
      </div>

      <div className="w-full lg:w-3/4 p-4 border-8 border-white shadow-xl">
        <LineGraph data={graphDataQuery.data} />
      </div>
    </div>
  );
};

export default ChartsAndMapsPage;
