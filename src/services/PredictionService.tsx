import axios from 'axios';

const baseUrl = 'https://afcon.onrender.com/api/v1/predictions';

interface PredictionData {
  places: {
    quarter: string[];
    semi: string[];
    final: string[];
    winner: string[];
  };
}

interface EmailRegisterPayload {
  user: {
    username: string;
    email: string;
  };
  places: PredictionData['places'];
}

export async function createPrediction(payload: EmailRegisterPayload) {
  const response = await axios.post(baseUrl, payload);
  console.error(response);
  return response.data;
}
