import axios from 'axios';

const baseUrl = 'https://afcon.onrender.com/api/v1/predictions';

export async function getAllPrediction() {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
}