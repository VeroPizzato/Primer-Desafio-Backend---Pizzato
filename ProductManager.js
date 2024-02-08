class ProductManager {

    #products
    static #ultimoIdProducto = 1

    constructor() {
        this.#products = [];
    };

    getProducts = () => {
        return this.#products;
    }

    #getNuevoId() {
        const id = ProductManager.#ultimoIdProducto
        ProductManager.#ultimoIdProducto++
        return id
    }
    
    getProductById = (id) => {
        const codeIndex = this.#products.findIndex(e => e.id === id);
        if (codeIndex === -1) {
            return (`Producto con ID: ${id} Not Found`);
        } else {
            return this.#products[codeIndex];
        }
    }

    #soloNumYletras = (code) => {
        return (/^[a-z A-Z 0-9]+$/.test(code))
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            id: this.#getNuevoId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
                
        if (title.trim().length === 0) {
            console.error("Error. El campo titulo es invalido.");
            return;
        }

        if (description.trim().length === 0) {
            console.error("Error. El campo descripción es invalido.");
            return;
        }

        if (isNaN(price)) {
            console.error("Error. El campo precio es invalido.");
            return;
        }

        if (thumbnail.trim().length === 0) {
            console.error("Error. El campo ruta de imagen es invalido.");
            return;
        }

        if (isNaN(stock)) {
            console.error("Error. El campo stock es invalido.");
            return;
        }
        
        if (!this.#soloNumYletras(code)) {
            console.error("Error. El campo codigo identificador es invalido.");
            return;
        }

        const codeIndex = this.#products.findIndex(e => e.code === code);
        if (codeIndex !== -1) {
            console.error("Codigo ya existente");
            return;
        }

        this.#products.push(product);
    }   
}

// Testing de la clase
const manejadorDeProductos = new ProductManager();
console.log(manejadorDeProductos.getProducts());
manejadorDeProductos.addProduct("producto prueba","Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);
console.log(manejadorDeProductos.getProducts());
manejadorDeProductos.addProduct("producto prueba","Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);  // error porque el código esta repetido
console.log(manejadorDeProductos.getProductById(1));
console.log(manejadorDeProductos.getProductById(2));  // error porque no encuentra el producto



