const defaultOptions = {
  cache: "no-cache",
  credentials: "include",
  headers: {
    "Content-type": "application/json",
  },
};

export const fetcher = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, { ...defaultOptions, ...options })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const get = (url, params, options) => {
  const query = params ? "?" + new URLSearchParams(params) : "";
  return fetcher(url + query, {
    method: "GET",
    ...options,
  });
};

export const post = (url, data, options) => {
  return fetcher(url, {
    method: "POST",
    body: JSON.stringify(data),
    ...options
  })
}
