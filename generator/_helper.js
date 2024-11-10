import fs from 'fs';
import axios from 'axios';

export const githubUrl = {
    'peds': 'https://raw.githubusercontent.com/DurtyFree/gta-v-data-dumps/master/peds.json'
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

export function writeToFile(fileName, data) {
    fs.mkdir('./generated', err => {});
    fs.writeFile(`./generated/${fileName}`, data, err => {
        if (err) {
            console.error(fileName, err);
        }
        console.log(`${fileName} generated successfully`);
    });
}