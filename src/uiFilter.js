class uiFilter {
  constructor() {
    this.output = document.getElementById("output");
    this.search = document.getElementById("search");
  }
  searchBar(products) {
    const searchedVal = products.filter(
      (product) =>
        product.title.toLowerCase().trim() === this.search.value ||
        product.author.toLowerCase().trim() === this.search.value
    );
    let result = "";
    this.output.innerHTML = `<h1> Result for  "${this.search.value}": </h1>`;
    searchedVal.forEach((product) => {
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
  lessThan20(products) {
    let filtered = products.filter((product) => product.price <= 20);
    let result = "";
    filtered.forEach((product) => {
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
  lessThan30(products) {
    let filtered = products.filter(
      (product) => product.price > 20 && product.price <= 30
    );
    let result = "";
    filtered.forEach((product) => {
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
  lessThan40(products) {
    let filtered = products.filter(
      (product) => product.price > 30 && product.price <= 40
    );
    let result = "";
    filtered.forEach((product) => {
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
  lessThan50(products) {
    let filtered = products.filter(
      (product) => product.price > 40 && product.price <= 50
    );
    let result = "";
    filtered.forEach((product) => {
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
  lessThan60(products) {
    let filtered = products.filter(
      (product) => product.price > 50 && product.price >= 60
    );
    let result = "";
    filtered.forEach((product) => {
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
}

export const uiFil = new uiFilter();
