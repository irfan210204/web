var parkingData = [];

function saveParkingData() {
    localStorage.setItem("parkingData", JSON.stringify(parkingData));
}

function getParkingData() {
    var parkingDataString = localStorage.getItem("parkingData");
    return parkingDataString ? JSON.parse(parkingDataString) : [];
}

function showParkingData() {
    parkingData = getParkingData();
    var parkingList = document.getElementById("parkingList");
    parkingList.innerHTML = "";

    for (var i = 0; i < parkingData.length; i++) {
        var li = document.createElement("li");
        li.textContent = parkingData[i].plat;
        parkingList.appendChild(li);
    }
}

function addParkingData(plat) {
    parkingData.push({ plat: plat });
    saveParkingData();
    showParkingData();
}

window.addEventListener("DOMContentLoaded", function() {
    showParkingData();
});

document.getElementById("parkingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var plat = document.getElementById("plat").value;
    if (plat.trim() !== "") {
        addParkingData(plat);
        document.getElementById("plat").value = "";
    }
});
