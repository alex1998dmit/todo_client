import axios, { AxiosError } from "axios";
import rootStore from "../../store";

const RequestInterceptor = axios.create();

RequestInterceptor.interceptors.request.use((config) => {
  RequestInterceptor.defaults.withCredentials = true;
  return config;
});

RequestInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<any>) => {
    switch (error.code) {
      case "401":
        rootStore.authStore.logout();
        break;
    }
    return Promise.reject(error);
  }
);

export { RequestInterceptor };
