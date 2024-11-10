import {generateMissingPeds} from './generator/missingPeds.js';

const index_dataFlag = process.argv.findIndex(x => x === '-d');
const index_data_value = index_dataFlag + 1;

if (process.argv[index_dataFlag]) {
    switch(process.argv[index_data_value]) {
        case 'missingpeds': {
            await generateMissingPeds();
            break;
        }
        default: {
            console.log('use -d pedlist');
        }
    }
}