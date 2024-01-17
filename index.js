import {generateVehicles} from './generator/vehicle.js';

const index_dataFlag = process.argv.findIndex(x => x === '-d');
const index_data_value = index_dataFlag + 1;

if (process.argv[index_dataFlag]) {
    switch(process.argv[index_data_value]) {
        case 'vehicle': {
            await generateVehicles();
            break;
        }
        default: {
            console.log('use -d vehicle');
        }
    }
}