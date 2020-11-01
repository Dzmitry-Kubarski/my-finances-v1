
//hooks
import { useHttp } from '../hooks/http.hook';

export const api = {


    auth: {
        fetchRegister(values) {
            request('/api/auth/register', 'POST', { ...values });
        }
    }
}