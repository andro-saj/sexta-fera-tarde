const searchInput = document.getElementById("searchInput");
const vehicleList = document.getElementById("vehicleList");

function renderVehicles(list) {
  vehicleList.innerHTML = "";
  if(list.length === 0){
    vehicleList.innerHTML = "<p class='text-muted'>Nenhum veículo encontrado.</p>";
    return;
  }
  list.forEach(vehicle => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="vehicle-card">
        <img src="${vehicle.img}" alt="${vehicle.name}">
        <div class="card-body">
          <div class="card-title">${vehicle.name}</div>
          <div class="card-price">${vehicle.price}</div>
          <button class="btn btn-primary mt-2">Ver Detalhes</button>
        </div>
      </div>
    `;
    vehicleList.appendChild(col);
  });
}

// Renderiza todos inicialmente
renderVehicles(vehicles);

// Filtra ao digitar
searchInput.addEventListener("input", function() {
  const term = this.value.toLowerCase();
  const filtered = vehicles.filter(v => v.name.toLowerCase().includes(term));
  renderVehicles(filtered);
});
