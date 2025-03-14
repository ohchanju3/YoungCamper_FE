import { API } from "../utils";

export const getAnnouncement = async (id, languageCode) => {
  try {
    const response = await API.get(`/api/announcements/${id}`, {
      headers: {
        "Accept-Language": languageCode,
      },
    });
    // console.log(response.data);
    return response;
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};
