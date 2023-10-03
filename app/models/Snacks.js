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
              <p>${this.name}</p>
              <p>$${this.price}</p>
              <button class="btn btn-success" type="button">Cart ➕</button>
            </div>
          </div>
        
        `
    }
}