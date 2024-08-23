import { useQuery } from "react-query";

const API_BASE = "https://disease.sh/v3/covid-19";

export const useWorldData = () =>
  useQuery("worldData", async () => {
    const response = await fetch(`${API_BASE}/all`);
    return response.json();
  });

export const useCountryData = () =>
  useQuery("countryData", async () => {
    const response = await fetch(`${API_BASE}/countries`);
    return response.json();
  });

export const useGraphData = () =>
  useQuery("graphData", async () => {
    const response = await fetch(`${API_BASE}/historical/all?lastdays=all`);
    return response.json();
  });
