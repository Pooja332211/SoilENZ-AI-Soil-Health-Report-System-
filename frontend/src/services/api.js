import axios from "axios";

// ========================================
// AXIOS INSTANCE
// ========================================

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// ========================================
// GENERATE SOIL REPORT
// ========================================

export const generateSoilReport = async (file) => {
  try {
    const formData = new FormData();

    formData.append("file", file);

    console.log("UPLOADING FILE...");

    const response = await API.post(
      "/api/upload-receipt",
      formData
    );

    console.log(
      "========== API RESPONSE =========="
    );

    console.log(response.data);

    // IMPORTANT FIX
    // Return full backend response
    return response.data;

  } catch (error) {
    console.error(
      "API ERROR:",
      error
    );

    throw error;
  }
};