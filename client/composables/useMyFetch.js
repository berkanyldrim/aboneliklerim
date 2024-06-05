export const useMyFetch = (request, opts) => {
  const config = useRuntimeConfig();
  const token = localStorage.getItem("token");

  return useFetch(request, {
    baseURL: config.public.baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
      ...opts?.headers,
    },
    ...opts,
  }).then((response) => {
    if (response.status === 401) {
      // Eğer token geçersizse login sayfasına yönlendirme
      navigateTo("/access");
    }
    return response;
  });
};
