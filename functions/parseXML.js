import { getData } from "./getData.js";

async function parseXML() {
    const XMLdata = await getData();
    let parser = null;
    let parsedData = null;

    if(window.DOMParser) {
        parser = new DOMParser();
        parsedData = parser.parseFromString(XMLdata, "text/xml");
    }
    else {
        parsedData = new ActiveXObject("Microsoft.XMLDOM");
        parsedData.async = false;
        parsedData.loadXML(XMLdata);
    }

    parser = new DOMParser();
    parsedData = parser.parseFromString(XMLdata, "text/xml");

    return parsedData;
}

export {
    parseXML
};