const irishRail = "http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML?StationCode=cnlly";

async function getData() {
    try {
        const res = await fetch(irishRail);
        const XMLdata = await res.text();
        
        return XMLdata;
    } catch (err) {
        console.log(err);
    }
}

export {
    getData
};