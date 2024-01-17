import axios from 'axios';

export const githubUrl = {
    'vehicles': 'https://raw.githubusercontent.com/DurtyFree/gta-v-data-dumps/master/vehicles.json'
};

export async function getDataFromGithub(url) {
    return new Promise((resolve) => {
        axios.get(url)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.error(error);
                resolve(null);
            });
    });
}