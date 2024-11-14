import {convertXmlToJson, getDataFromGithub, githubUrl, writeToFile} from './_helper.js';

export async function generateMissingPeds(pedsXmlUrl, pedsRawXml) {
    let data2 = '';
    if (pedsXmlUrl && pedsXmlUrl.includes('.xml') && pedsXmlUrl.includes('https://')) {
        data2 = await getDataFromGithub(pedsXmlUrl);
    } else {
        data2 = pedsRawXml;
    }
    let data = await getDataFromGithub(githubUrl.peds);
    if (data && data2) {
        data = data.filter(x => !x.DlcName.toLowerCase().includes('g9ec') && !x.Name.toLowerCase().startsWith('slod_') && x.Name.toLowerCase() !== 'mp_headtargets');
        const oldPedList = convertXmlToJson(data2);
        const pedListXml = oldPedList.PedList?.Category?.reduce((acc, category) => {
            if (category.Ped) {
                const names = category.Ped.map(ped => ped.name[0].toLowerCase());
                acc.push(...names);
            }
            return acc;
        }, []);
        const newPedsNames = data.map(x => {
            return x.Name.toLowerCase();
        });
        const missingInPedlistXml = newPedsNames.filter(item => !pedListXml.includes(item));
        const wrongInPedListXml = pedListXml.filter(item => !newPedsNames.includes(item));
        //console.log(missingInPedlistXml.length);
        //console.log(wrongInPedListXml.length);
        //writeToFile('missingInPedlistXml.json', JSON.stringify(missingInPedlistXml, null, 4));
        //writeToFile('wrongInPedListXml.json', JSON.stringify(wrongInPedListXml, null, 4));

        return {missingInPedlistXml, wrongInPedListXml};
    }
}

