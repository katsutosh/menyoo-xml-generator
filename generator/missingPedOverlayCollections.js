import {convertXmlToJson, getDataFromGithub, githubUrl, writeToFile} from './_helper.js';

export async function generateMissingPedOverlayCollections(xmlUrl, rawXml) {
    let data2 = '';
    if (xmlUrl && xmlUrl.includes('.xml') && xmlUrl.includes('https://')) {
        data2 = await getDataFromGithub(xmlUrl);
    } else {
        data2 = rawXml;
    }
    let data = await getDataFromGithub(githubUrl.pedOverlayCollections);
    if (data && data2) {
        //data = data.filter(x => !x.Name.toLowerCase().startsWith('slod_') && x.Name.toLowerCase() !== 'mp_headtargets');
        const oldList = convertXmlToJson(data2);
        const allPedCategories = oldList.PedDecalOverlays.Ped;

        const oldData = allPedCategories.flatMap(ped => {
            // Iteriere über die Typen (z.B. TYPE_TATTOO, TYPE_BADGE, usw.) im Objekt
            return Object.keys(ped)
                .filter(typeKey => typeKey !== 'hash' && typeKey !== 'name' && typeKey !== 'USERTYPE_HAIR') // Filtere `hash` und `name` heraus
                .flatMap(typeKey => {
                    // Prüfen, ob der aktuelle Key ein Overlay-Typ ist (z.B., TYPE_TATTOO) und ob er ein Array enthält
                    const zones = ped[typeKey][0]; // Annahme: ped[typeKey] ist ein Array mit mindestens einem Objekt
                    if (zones && typeof zones === 'object') {
                        // Iteriere über jede Zone (z.B., ZONE_BACK, ZONE_TORSO)
                        return Object.keys(zones).flatMap(zoneKey => {
                            const overlaysInZone = zones[zoneKey];
                            // Iteriere über jedes Overlay in der aktuellen Zone
                            return overlaysInZone.flatMap(zoneObj =>
                                zoneObj.OVERLAY.map(overlay => ({
                                    CollectionName: overlay.collection[0],
                                    OverlayName: overlay.name[0],
                                    Type: typeKey,         // Typ des Objekts (z.B., TYPE_TATTOO, TYPE_BADGE)
                                    ZoneName: zoneKey      // Zone (z.B., ZONE_BACK, ZONE_TORSO)
                                }))
                            );
                        });
                    }
                    return []; // Falls es kein Array ist, geben wir ein leeres Array zurück
                });
        });

        const newData = data.flatMap(collection =>
            collection.Overlays.map(overlay => ({
                CollectionName: collection.CollectionName,
                OverlayName: overlay.OverlayName,
                Type: overlay.Type,
                ZoneName: overlay.ZoneName
            }))
        );

        // Hilfsfunktion, um nur `id` und `name` zu vergleichen
        const isEqual = (obj1, obj2) => {
            return obj1.CollectionName.toLowerCase() === obj2.CollectionName.toLowerCase()
                && obj1.OverlayName.toLowerCase() === obj2.OverlayName.toLowerCase()
                && obj1.Type.toLowerCase() === obj2.Type.toLowerCase()
                && obj1.ZoneName.toLowerCase() === obj2.ZoneName.toLowerCase();
        };

        const missingInListXml = newData.filter(obj1 => {
            const isDifferent = !oldData.some(obj2 => isEqual(obj1, obj2));
            console.log(`Object in array1: ${JSON.stringify(obj1)} is different: ${isDifferent}`);
            return isDifferent;
        });
        const wrongInListXml = oldData.filter(obj2 => {
            const isDifferent = !newData.some(obj1 => isEqual(obj2, obj1));
            console.log(`Object in array2: ${JSON.stringify(obj2)} is different: ${isDifferent}`);
            return isDifferent;
        });

        const missingInListXmlArray = missingInListXml.map(ent => (`${ent.Type} ${ent.ZoneName} ${ent.CollectionName} ${ent.OverlayName}`));
        const wrongInListXmlArray = wrongInListXml.map(ent => (`${ent.Type} ${ent.ZoneName} ${ent.CollectionName} ${ent.OverlayName}`));
        writeToFile('missingInPedOverlayCollections.json', JSON.stringify(missingInListXmlArray, null, 4));
        writeToFile('wrongInPedOverlayCollectionsXml.json', JSON.stringify(wrongInListXmlArray, null, 4));

        return {missingInListXmlArray, wrongInListXmlArray};
    }
}

