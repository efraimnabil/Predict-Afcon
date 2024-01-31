import axios from 'axios';

const baseUrl = 'https://afcon.onrender.com/api/v1/predictions';

interface PredictionData {
  places: {
    quarter: string[];
    semi: string[];
    final: string[];
  };
}

interface EmailRegisterPayload {
  email: string;
  prediction: PredictionData;
}

export async function createPrediction(payload: EmailRegisterPayload) {
  const response = await axios.post(baseUrl, payload);
  return response.data;
}

export async function getPredictions(){
    const response = await axios.get(baseUrl);
    return response.data;
}