const defaultOptions: RequestInit = {
  cache: "no-cache",
  credentials: "include",
  headers: {
    "Content-type": "application/json",
  },
};

export const fetcher = (url: string, options: RequestInit) => {
  return new Promise((resolve, reject) => {
    fetch(url, { ...defaultOptions, ...options })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const get = <T>(url: string, params?: any, options?: RequestInit):Promise<T> => {
  const query = params ? "?" + new URLSearchParams(params) : "";
  return fetcher(url + query, {
    method: "GET",
    ...options,
  }) as Promise<T>
};

export const post = <T>(url: string, data?: any, options?: RequestInit):Promise<T> => {
  return fetcher(url, {
    method: "POST",
    body: JSON.stringify(data),
    ...options,
  }) as Promise<T>
};
