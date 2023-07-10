var vehicles = [];

function addVehicle() {
    var platInput = document.getElementById('plat');
    var plat = platInput.value;
    if (plat !== '') {
        vehicles.push(plat);
        platInput.value = '';
        showVehicleList();
    }
}

function showVehicleList() {
    var vehicleList = document.getElementById('vehicleList');
    vehicleList.innerHTML = '';

    vehicles.forEach(function(vehicle) {
        var li = document.createElement('li');
        li.textContent = vehicle;
        vehicleList.appendChild(li);
    });
}

showVehicleList();

