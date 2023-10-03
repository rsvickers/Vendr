export class Snacks {


    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get SnackOptions() {
        return `
       
          <div class="d-flex justify-content-between col p-5">
          <div class="bg-primary text-light">
            <img class="img-fluid box"
              src="${this.imgUrl}"
              alt="${this.name}">
              <p class="text-center fs-3">${this.name}</p>
              <p class="text-center fs-2">$${this.price}</p>
              <button class="btn btn-success" type="button">Cart ➕</button>
            </div>
          </div>
        
        `
    }
}