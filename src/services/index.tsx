import { URL_API, headers } from "./Config"

export const webApiServices =  {
    getLoadServices: async () => {
        const urlApi = URL_API + 'dataUser'
        const response = await fetch(urlApi, { method: 'GET', headers })
        return await response.json()
    }
}