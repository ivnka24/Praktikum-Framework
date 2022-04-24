const domainPath = 'http://localhost:3001/';
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

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}${path}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
    });
    return promise;
};

const DeleteAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}/${data}`, {method: 'DELETE',})
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            });
    });
    return promise;
}

// Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// Daftar API - POST 
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// Daftar API - DELETE 
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);

const API = { //inisialisasi fuction-fuction yang akan disediakan global API
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
};

export default API; 