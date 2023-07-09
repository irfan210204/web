// Data kendaraan terdaftar
var vehicles = [];

// Fungsi untuk menambahkan kendaraan ke daftar
function addVehicle() {
    var platInput = document.getElementById('plat');
    var plat = platInput.value;
    if (plat !== '') {
        vehicles.push(plat);
        platInput.value = '';
        showVehicleList();
    }
}

// Fungsi untuk menampilkan daftar kendaraan pada halaman Info Parkir
function showVehicleList() {
    var vehicleList = document.getElementById('vehicleList');
    vehicleList.innerHTML = '';

    // Menambahkan setiap kendaraan ke daftar
    vehicles.forEach(function(vehicle) {
        var li = document.createElement('li');
        li.textContent = vehicle;
        vehicleList.appendChild(li);
    });
}

// Memanggil fungsi untuk menampilkan daftar kendaraan pada halaman Info Parkir
showVehicleList();

