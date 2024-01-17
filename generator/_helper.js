import fs from 'fs';
import axios from 'axios';

export const githubUrl = {
    'vehicles': 'https://raw.githubusercontent.com/DurtyFree/gta-v-data-dumps/master/vehicles.json',
    'peds': 'https://raw.githubusercontent.com/DurtyFree/gta-v-data-dumps/master/peds.json'
};

export const fileNames = {
    vehicleList: 'VehicleList',
    pedList: 'PedList',
}

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
    fs.writeFile(`./generated/${fileName}.xml`, data, err => {
        if (err) {
            console.error(fileName, err);
        }
        console.log(`${fileName}.xml generated successfully`);
    });
}