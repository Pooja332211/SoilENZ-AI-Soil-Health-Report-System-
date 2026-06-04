import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const uploadReceipt = async (file) => {

  const formData = new FormData();

  formData.append("file", file);

  const response = await axios.post(
    `${API_URL}/api/upload-receipt`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const generateReport = async (data) => {

  const response = await axios.post(
    `${API_URL}/api/generate-report`,
    data
  );

  return response.data;
};
