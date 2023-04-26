const API_URL = 'http://localhost:3000/api/v1/';

export function rest(url: string, method: string = 'GET', body: any = undefined){
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined
    };
    return fetch(url, options).then(res => res.json());
}

export function api(url: string, method?: string, data?: any){
    return rest(API_URL + url, method, data);
    
}

export type DataEnvelope<T> = {
    data: T,
    isSuccess: boolean,
    error?: string,
}

export type DataListEnvelope<T> = DataEnvelope<T[]> & {
    total: number,
}
