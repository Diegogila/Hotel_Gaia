const style = `
.logo-icon{
  width: 36px;
  height: 36px;
}


*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;
}



nav{
  background-color: #191e24f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:50px;
  padding: 15px 50px;
  box-shadow: 10px 10px 10px rgba(128 128 128 0.548);
  color: white;
  

}

nav ul{
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

li {
  width: 70px;
}

li a {
  cursor: pointer;
  padding: 20px 15px;
  transition: 0.5s;
  color: white;

}

li a:hover{
  color: #f1c40f;
  border-bottom: 4px #f1c40f solid;
  transition: 0.5s;
}

.hide{
  top:70px;
}

@media screen and (max-width: 700px){
  
  .hamburguer{
      display:flex;
      flex-direction: column;
      gap: 8px;
      cursor:pointer;
      padding:10px;
      margin-right: -10px;
      background-color: black;
  
  }

  .lines{
    display: block;
    background-color: white;
    height: 2px;
    width: 35px;
  }

  .lines-rotate{
    background-color: rgb(85,85,85);
    border-radius: 5px;
  }

  nav{
    position: relative;
    padding: 15px 20px;
  }

  ul{
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -300px;
      right: 0;
      background-color: #f1c40f;
      padding: 35px 0;
      border-radius: 0 0 20px 20px;
      box-shadow: 0px 5px 5px rgba(128, 128, 128, 0.363); 
  }

  li a{
      color: rgba(12, 11, 11, 0.836);
  }
  li{
      text-align: center;
      width: 90vw;
  }

  li a:hover{
      font-weight: bold;
      color: #191e24;
      border: none;
      letter-spacing: 3px;
  }
  
}
`;

class Hamburguer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.nav = document.createElement('nav');

    this.logo = document.createElement('img');
    this.logo.className = "logo-icon";
    this.logo.src = this.getAttribute('src-logo');

    this.hamburguer = document.createElement('div');
    this.hamburguer.className = "hamburguer";
    this.hamburguer.innerHTML = `
      <span class="lines"></span>
      <span class="lines"></span>
      <span class="lines"></span>
    `; 

    this.hamburguer.addEventListener('click', () => {
      this.navList.classList.toggle('hide');
      this.hamburguer.classList.toggle('lines-rotate');
    })

    this.navList = document.createElement("ul");
    this.navList.className = "nav-links";

    const linksData = [
      { text: "Intranet", href: "#login" },
      { text: "Habitaciones", href: "#habitaciones" },
      { text: "Bebidas", href: "#bebidas" },
    ];

    linksData.forEach((linkInfo) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.className = "links";
      link.href = linkInfo.href;
      link.textContent = linkInfo.text;
      link.addEventListener('click', () => {
        this.navList.classList.toggle('hide');
      })
      listItem.appendChild(link);
      this.navList.appendChild(listItem);
    });
    this.nav.append(this.logo ,this.hamburguer, this.navList);

  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${style}</style>`;
    this.shadowRoot.appendChild(this.nav)
  }


}

export default Hamburguer;
