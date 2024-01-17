import {generateVehicles} from './generator/vehicleList.js';
import {generatePeds} from './generator/pedList.js';

const index_dataFlag = process.argv.findIndex(x => x === '-d');
const index_data_value = index_dataFlag + 1;

if (process.argv[index_dataFlag]) {
    switch(process.argv[index_data_value]) {
        case 'vehiclelist': {
            await generateVehicles();
            break;
        }
        case 'pedlist': {
            await generatePeds();
            break;
        }
        default: {
            console.log('use -d vehiclelist | pedlist');
        }
    }
}