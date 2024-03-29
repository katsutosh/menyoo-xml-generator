import {fileNames, getDataFromGithub, githubUrl, writeToFile} from './_helper.js';

const vehicleClass =
    {
        'Compact': 0,
        'Sedan': 1,
        'SUV': 2,
        'Coupe': 3,
        'Muscle': 4,
        'SportsClassic': 5,
        'Sport': 6,
        'Super': 7,
        'Motorcycle': 8,
        'Offroad': 9,
        'Industrial': 10,
        'Utility': 11,
        'Van': 12,
        'Cycle': 13,
        'Boat': 14,
        'Helicopter': 15,
        'Plane': 16,
        'Service': 17,
        'Emergency': 18,
        'Military': 19,
        'Commercial': 20,
        'Train': 21,
        'Openwheel': 22
    };

const menyooClasses = {
    'Openwheel': [vehicleClass.Openwheel],
    'Super': [vehicleClass.Super],
    'Coupe': [vehicleClass.Coupe],
    'Sport': [vehicleClass.Sport],
    'Muscle': [vehicleClass.Muscle],
    'SportsClassic': [vehicleClass.SportsClassic],
    'Truck': [vehicleClass.Commercial, vehicleClass.Industrial],
    'Sedan': [vehicleClass.Sedan],
    'Offroad': [vehicleClass.Offroad],
    'SUV': [vehicleClass.SUV],
    'Compact': [vehicleClass.Compact],
    'Van': [vehicleClass.Van],
    'Service': [vehicleClass.Service, vehicleClass.Utility],
    'Train': [vehicleClass.Train],
    'Emergency': [vehicleClass.Emergency, vehicleClass.Military],
    'Motorcycle': [vehicleClass.Motorcycle],
    'Cycle': [vehicleClass.Cycle],
    'Plane': [vehicleClass.Plane],
    'Helicopter': [vehicleClass.Helicopter],
    'Boat': [vehicleClass.Boat],
    'Trailer': [] //Type: Trailer
};

export async function generateVehicles() {
    let data = await getDataFromGithub(githubUrl.vehicles);
    if (data) {
        data = data.filter(x => !x.DlcName.toLowerCase().includes('g9ec'));
        let result = '<?xml version="1.0" encoding="ISO-8859-1"?>\n' +
            '<VehicleList>\n';
        for(const mClass of Object.keys(menyooClasses)) {
            let categoryComment = '';
            if (menyooClasses[mClass].length > 1) {
                categoryComment += '<!--';
                for(const [index, c] of menyooClasses[mClass].entries()) {
                    const categoryName = Object.keys(vehicleClass).find(x => vehicleClass[x] === c);
                    categoryComment += `${index === 0 ? '' : '+'} ${categoryName} `;
                }
                categoryComment += '-->';
            }
            result += `\t<Category name=\"${mClass}\">${categoryComment}\n`;
            result += getClassVehicles(data, mClass);
            result += `\t</Category>\n`;
        }

        result += `</VehicleList>`;
        writeToFile(fileNames.vehicleList, result);
    }
}

function getClassVehicles(data, mClass) {
    let classVehicles = [];
    if (mClass !== 'Trailer') {
        classVehicles = data.filter(x => x.Type !== 'TRAILER' && menyooClasses[mClass].includes(x.ClassId));
    } else {
        classVehicles = data.filter(x => x.Type === 'TRAILER');
    }

    let vehicles = '';
    for(const veh of classVehicles) {
        const vehicle = `\t\t<Vehicle name=\"${veh.Name.toUpperCase()}\" /><!-- ${veh.DisplayName?.English || veh.Name} -->\n`;
        vehicles += vehicle;
    }
    return vehicles;
}