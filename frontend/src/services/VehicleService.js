import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/vehicles";

export const listVehicles = () => { return axios.get(REST_API_BASE_URL); }