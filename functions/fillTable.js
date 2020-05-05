import { parseXML } from "./parseXML.js";

async function fillTable() {
    
    const data = await parseXML();
    const dataLength = data.getElementsByTagName("objStationData").length;
    const table = document.getElementById("table_entries");

    try {
        for(let i = 0; i < dataLength; i++) {

            let row = document.createElement("tr");

            let due = document.createElement("td");
            let dest = document.createElement("td");
            let dep = document.createElement("td");
            let arrDest = document.createElement("td");
            let origin = document.createElement("td");

            if(data.getElementsByTagName("Duein")[i].childNodes[0].nodeValue == "1") {
                due.innerHTML = data.getElementsByTagName("Duein")[i].childNodes[0].nodeValue+" minute";
            }
            else{
                due.innerHTML = data.getElementsByTagName("Duein")[i].childNodes[0].nodeValue+" minutes";
            }
            dest.innerHTML = data.getElementsByTagName("Destination")[i].childNodes[0].nodeValue;
            dep.innerHTML = data.getElementsByTagName("Expdepart")[i].childNodes[0].nodeValue;
            arrDest.innerHTML = data.getElementsByTagName("Destinationtime")[i].childNodes[0].nodeValue;
            origin.innerHTML = data.getElementsByTagName("Origin")[i].childNodes[0].nodeValue;

            row.append(due);
            row.append(dest);
            row.append(dep);
            row.append(arrDest);
            row.append(origin);

            table.append(row);
        }
    } catch(err) {
        console.log(err);
    }
}

export {
    fillTable
};