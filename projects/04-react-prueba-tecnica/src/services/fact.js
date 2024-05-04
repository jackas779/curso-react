const API_URI = "https://catfact.ninja/fact";

export const getRamdonImg = async () => {
    const response = await fetch(API_URI);
    const data = await response.json();
    const { fact } = data;
    return fact;
  }; 