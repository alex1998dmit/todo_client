import { AxiosResponse } from "axios";
import { MethodsEnum } from "../../models/requests";
import rootStore from "../../store";
import { RequestInterceptor } from "./interceptor";

class RequestAgent {
    private host: string = '/';

    public authRequest = async <R, D = object, P = object>(
        method: MethodsEnum,
        url: string,
        data?: D,
        params?: P
    ) => {
        try {
            const token = rootStore.authStore.getAccessToken();
            return await RequestInterceptor.request<R, AxiosResponse<R, D>, D>({
                ...this.generateCommonRequestParams(method, url, data, params),
                headers: {
                    Authorization: `Token ${token}`
                }
            });
        } catch (error) { throw error }
    }

    public unauthedRequest = async <R, D = object, P = object>(
        method: MethodsEnum,
        url: string,
        data?: D,
        params?: P
    ) => {
        try {
            return await RequestInterceptor.request<R, AxiosResponse<R, D>, D>({
                ...this.generateCommonRequestParams(method, url, data, params),
            });
        } catch (error) { throw error }
    }

    private generateCommonRequestParams = <R, D = object, P = object>(
        method: MethodsEnum,
        url: string,
        data?: D,
        params?: P
    ) => {
        return {
            method,
            url,
            data,
            params,  
        }
    }
}

const requestAgent = new RequestAgent();
export default requestAgent;
