import { BASE_URL,API_URL,API_ADMIN_URL } from "@env";

export const baserLogin = async (body = {}) => {
  //console.log(API_ADMIN_URL);
  try {
    const response = await fetch(
      
      API_ADMIN_URL + API_ADMIN_URL + "baser-core/users/login.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const fetchAdminApiResponse = async (url,method,body = {},token) => {
  try {
    console.log(BASE_URL);
    
    const response = await fetch(
      BASE_URL + API_ADMIN_URL + url,
      {
        method:method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Additional API Request Error:", error);
    throw error;
  }
};


export const fetchApiResponse = async (url) => {
  try {
    const response = await fetch(
      BASE_URL + API_URL + url,
      {
        method:"GET",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Additional API Request Error:", error);
    throw error;
  }
};