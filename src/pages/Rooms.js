const Rooms = () => {
    const view = `
    <section class="habitaciones">
      <h1 class="Primary-title">Habitaciones</h1>
      <div class="card-container">
        <div class="card">
            <img src="../../assets/images/2indiv.jpg" alt="Habitación 1">
            <div class="card-info">
                <h2>Habitación #1</h2>
                <p><strong>Habitación con Camas:</strong> Dos individuales</p>
                <p><strong>Número de Huéspedes Máximo:</strong> 2</p>
                <p><strong>Balcón:</strong> Sí</p>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/images/queen.jpg" alt="Habitación 2">
            <div class="card-info">
                <h2>Habitación #2</h2>
                <p><strong>Habitación con Camas:</strong> Una Queen Size</p>
                <p><strong>Número de Huéspedes Máximo:</strong> 2</p>
                <p><strong>Balcón:</strong> No</p>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/images/king.jpg" alt="Habitación 3">
            <div class="card-info">
                <h2>Habitación #3</h2>
                <p><strong>Habitación con Camas:</strong> Una King Size</p>
                <p><strong>Número de Huéspedes Máximo:</strong> 3</p>
                <p><strong>Balcón:</strong> Sí</p>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/images/2matri.jpg" alt="Habitación 4">
            <div class="card-info">
                <h2>Habitación #4</h2>
                <p><strong>Habitación con Camas:</strong> Dos Matrimoniales</p>
                <p><strong>Número de Huéspedes Máximo:</strong> 4</p>
                <p><strong>Balcón:</strong> No</p>
            </div>
        </div>
    </div>
    </section>
`;
  return view;
}


export default Rooms;