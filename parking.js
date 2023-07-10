// Menampilkan data saat halaman dimuat
window.addEventListener("DOMContentLoaded", function() {
    showParkingData();
});

// Menambahkan data parkir baru
document.getElementById("parkingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var plat = document.getElementById("plat").value;
    if (plat.trim() !== "") {
        addParkingData(plat);
        document.getElementById("plat").value = ""; // Mengosongkan input setelah ditambahkan
    }
});

// Mengambil kendaraan
document.getElementById("pickupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var pickupPlat = document.getElementById("pickupPlat").value;
    if (pickupPlat.trim() !== "") {
        var pickupResult = document.getElementById("pickupResult");
        if (removeParkingData(pickupPlat)) {
            pickupResult.textContent = "Kendaraan dengan plat " + pickupPlat + " telah diambil.";
        } else {
            pickupResult.textContent = "Nomor plat tidak valid. Silakan coba lagi.";
        }
        document.getElementById("pickupPlat").value = ""; // Mengosongkan input setelah proses pengambilan
    }
});
