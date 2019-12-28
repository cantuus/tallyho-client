import config from '../config'
import TokenService from '../services/token-service'

const TallyhoApiService = {
    getTasks() {
        return fetch(`${config.API_ENDPOINT}/tasks`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },
    getTask(taskId) {
        return fetch(`${config.API_ENDPOINT}/tasks/${taskId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },
    postTask(title, image) {
        return fetch(`${config.API_ENDPOINT}/tasks`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                title,
                image,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    }
}

export default TallyhoApiService