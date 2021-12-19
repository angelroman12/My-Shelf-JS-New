class UI {
  constructor() {
    this.output = document.getElementById("output");
    this.outputAdmin = document.getElementById("outputAdmin");
  }

  getProductsIndex(products) {
    let result = "";
    products.forEach((product) => {
      result = `<div class="card">
            <img src="${product.picture}"/>
            <h3> ${product.author}</h3>
            <h4> ${product.title}</h4>
            <h5> ${product.price} ${product.curency}</h5>
        </div>
        `;
      this.output.innerHTML += result;
    });
  }

  getProductsAdmin(products) {
    let result = "";
    products.forEach((product) => {
      result = `<div class="adminTable"> 
				<img class="img" src="${product.picture} ">
          <div class='detaliiCarte'> 
          <h3>${product.author}</h3> 
          <h4>${product.title}</h4> 
          <h5>${product.price} ${product.curency}</h5> 
          </div>
				
				<button class="delete btn-red" id=${product.id} > Remove </button> </td>				
			</div>		
            `;
      this.outputAdmin.innerHTML += result;
    });
  }
}

export const ui = new UI();
