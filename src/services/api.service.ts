const API_URL = process.env.API_IRL;

const get = async <T>(endPoint: string) => {
  try {
    const url = `${API_URL}${endPoint}`;
    const option: RequestInit = {
      method: 'GET',
      headers: {},
    };

    const res = await fetch(url, option);
    const data = await res.json();

    return data as T;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const post = async <T>(endPoint: string, payload: object) => {
  try {
    const url = `${API_URL}${endPoint}`;
    const option: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(payload),
    };

    const res = await fetch(url, option);
    const data = await res.json();

    return data as T;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

export default {
  get,
  post,
};
