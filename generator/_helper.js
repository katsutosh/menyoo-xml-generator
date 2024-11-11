import fs from 'fs';
import axios from 'axios';
import xml2js from 'xml2js';

export const githubUrl = {
    'peds': 'https://raw.githubusercontent.com/DurtyFree/gta-v-data-dumps/master/peds.json',
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
    fs.mkdir('./generated', err => {
    });
    fs.writeFile(`./generated/${fileName}`, data, err => {
        if (err) {
            console.error(fileName, err);
        }
        console.log(`${fileName} generated successfully`);
    });
}

export function convertXmlToJson(xmlData) {
    let json = '';
    xml2js.parseString(xmlData, {mergeAttrs: true}, (err, result) => {
        if (err) {
            throw err;
        }
        json = result;
    });
    return json;
}

export const allDlcs = [
    {
        'name': 'mpbeach',
        'id': 1
    },
    {
        'name': 'spupgrade',
        'id': 2
    },
    {
        'name': 'mppatchesng',
        'id': 3
    },
    {
        'name': 'mpchristmas',
        'id': 4
    },
    {
        'name': 'patchday1ng',
        'id': 5
    },
    {
        'name': 'mpvalentines',
        'id': 6
    },
    {
        'name': 'patchday2ng',
        'id': 7
    },
    {
        'name': 'mpbusiness',
        'id': 8
    },
    {
        'name': 'patchday2bng',
        'id': 9
    },
    {
        'name': 'mpbusiness2',
        'id': 10
    },
    {
        'name': 'patchday3ng',
        'id': 11
    },
    {
        'name': 'mphipster',
        'id': 12
    },
    {
        'name': 'patchday4ng',
        'id': 13
    },
    {
        'name': 'mpindependence',
        'id': 14
    },
    {
        'name': 'patchday5ng',
        'id': 15
    },
    {
        'name': 'mppilot',
        'id': 16
    },
    {
        'name': 'patchday6ng',
        'id': 17
    },
    {
        'name': 'mplts',
        'id': 18
    },
    {
        'name': 'patchday7ng',
        'id': 19
    },
    {
        'name': 'mpchristmas2',
        'id': 20
    },
    {
        'name': 'patchday8ng',
        'id': 21
    },
    {
        'name': 'mpheist',
        'id': 22
    },
    {
        'name': 'mpluxe',
        'id': 23
    },
    {
        'name': 'patchday9ng',
        'id': 24
    },
    {
        'name': 'mpluxe2',
        'id': 25
    },
    {
        'name': 'patchday10ng',
        'id': 26
    },
    {
        'name': 'mpreplay',
        'id': 27
    },
    {
        'name': 'patchday11ng',
        'id': 28
    },
    {
        'name': 'mplowrider',
        'id': 29
    },
    {
        'name': 'patchday12ng',
        'id': 30
    },
    {
        'name': 'mphalloween',
        'id': 31
    },
    {
        'name': 'patchday13ng',
        'id': 32
    },
    {
        'name': 'patchday14ng',
        'id': 33
    },
    {
        'name': 'mpapartment',
        'id': 34
    },
    {
        'name': 'patchday15ng',
        'id': 35
    },
    {
        'name': 'mpxmas_604490',
        'id': 36
    },
    {
        'name': 'patchday16ng',
        'id': 37
    },
    {
        'name': 'mpjanuary2016',
        'id': 38
    },
    {
        'name': 'patchday17ng',
        'id': 39
    },
    {
        'name': 'mpvalentines2',
        'id': 40
    },
    {
        'name': 'patchday18ng',
        'id': 41
    },
    {
        'name': 'mplowrider2',
        'id': 42
    },
    {
        'name': 'patchday19ng',
        'id': 43
    },
    {
        'name': 'mpexecutive',
        'id': 44
    },
    {
        'name': 'patchday20ng',
        'id': 45
    },
    {
        'name': 'mpstunt',
        'id': 46
    },
    {
        'name': 'patchday21ng',
        'id': 47
    },
    {
        'name': 'mpbiker',
        'id': 48
    },
    {
        'name': 'patchday22ng',
        'id': 49
    },
    {
        'name': 'mpimportexport',
        'id': 50
    },
    {
        'name': 'mpspecialraces',
        'id': 51
    },
    {
        'name': 'mpgunrunning',
        'id': 52
    },
    {
        'name': 'mpairraces',
        'id': 53
    },
    {
        'name': 'mpsmuggler',
        'id': 54
    },
    {
        'name': 'mpchristmas2017',
        'id': 55
    },
    {
        'name': 'mpassault',
        'id': 56
    },
    {
        'name': 'mpbattle',
        'id': 57
    },
    {
        'name': 'mpchristmas2018',
        'id': 58
    },
    {
        'name': 'mpvinewood',
        'id': 59
    },
    {
        'name': 'mpheist3',
        'id': 60
    },
    {
        'name': 'patchday23ng',
        'id': 61
    },
    {
        'name': 'mpsum',
        'id': 62
    },
    {
        'name': 'mpheist4',
        'id': 63
    },
    {
        'name': 'patchday24ng',
        'id': 64
    },
    {
        'name': 'mptuner',
        'id': 65
    },
    {
        'name': 'patchday25ng',
        'id': 66
    },
    {
        'name': 'mpsecurity',
        'id': 67
    },
    {
        'name': 'patchday26ng',
        'id': 68
    },
    {
        'name': 'mpg9ec',
        'id': 69
    },
    {
        'name': 'patchdayg9ecng',
        'id': 70
    },
    {
        'name': 'mpg9ecpatch',
        'id': 71
    },
    {
        'name': 'mpsum2',
        'id': 72
    },
    {
        'name': 'patchday27ng',
        'id': 73
    },
    {
        'name': 'mpsum2_g9ec',
        'id': 74
    },
    {
        'name': 'patchday27g9ecng',
        'id': 75
    },
    {
        'name': 'patchday28ng',
        'id': 76
    },
    {
        'name': 'mpchristmas3_g9ec',
        'id': 77
    },
    {
        'name': 'mpchristmas3',
        'id': 78
    },
    {
        'name': 'patchday28g9ecng',
        'id': 79
    },
    {
        'name': 'mpchristmas3_patch1',
        'id': 80
    },
    {
        'name': 'patch2023_01_g9ec',
        'id': 81
    },
    {
        'name': 'mp2023_01_g9ec',
        'id': 82
    },
    {
        'name': 'patch2023_01',
        'id': 83
    },
    {
        'name': 'mp2023_01',
        'id': 84
    },
    {
        'name': 'mp2023_01_exepatch',
        'id': 85
    },
    {
        'name': 'mp2023_02_g9ec',
        'id': 86
    },
    {
        'name': 'patch2023_02',
        'id': 87
    },
    {
        'name': 'mp2023_02',
        'id': 88
    },
    {
        'name': 'exepatch',
        'id': 89
    },
    {
        'name': 'mp2024_01',
        'id': 90
    },
    {
        'name': 'mp2024_01_g9ec',
        'id': 91
    },
    {
        'name': 'patch2024_01',
        'id': 92
    },
    {
        'name': 'patch2024_01_g9ec',
        'id': 93
    }
];