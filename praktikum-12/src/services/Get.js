import {domainPath} from './Config';

const GetAPI = (path) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}${path}`)
            .then(response => response.json())
            .then((result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
    });
    return promise;
};

export default GetAPI;