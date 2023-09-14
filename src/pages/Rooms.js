const Rooms = () => {
    const view = `
    <main>
    <section class="habitaciones">
      <h1 class="Primary-title">Habitaciones</h1>
      <table class="main-table rooms__table">
        <tr class="main-table__header">
          <th>No.</th>
          <th>Habitacion</th>
          <th>Max. Ocup</th>
          <th>Disponible</th>
        </tr>
        <tr>
          <td>01</td>
          <td>2 Queen</td>
          <td>2</td>
          <td>Ocupada</td>
        </tr>
        <tr>
          <td>02</td>
          <td>Standar</td>
          <td>2</td>
          <td>Libre</td>
        </tr>
        <tr>
          <td>03</td>
          <td>King suite</td>
          <td>3</td>
          <td>Libre</td>
        </tr>
        <tr>
          <td>04</td>
          <td>2 King suite</td>
          <td>4</td>
          <td>Libre</td>
        </tr>
      </table>
    </section>
  </main>`;
  return view;
}


export default Rooms;