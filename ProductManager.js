class ProductManager {

    #products
    static #ultimoIdEvento = 1

    constructor() {
        this.#products = [];
    };

     getProducts = () => {
        return this.#products;
    }

    #getNuevoId() {
        const id = ProductManager.#ultimoIdEvento
        ProductManager.#ultimoIdEvento++
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

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const producto = {
            id: this.#getNuevoId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
              
        if (title === "") {
            console.error("Error. El campo titulo no tiene informacion.");
            return;
        }

        if (description === "") {
            console.error("Error. El campo descripción no tiene informacion.");
            return;
        }

        if (price === "") {
            console.error("Error. El campo precio no tiene informacion.");
            return;
        }

        if (thumbnail === "") {
            console.error("Error. El campo ruta de imagen no tiene informacion.");
            return;
        }

        if (stock === "") {
            console.error("Error. El campo stock no tiene informacion.");
            return;
        }

        if (code === "") {
            console.error("Error. El campo codigo identificador no tiene informacion.");
            return;
        }

        const codeIndex = this.#products.findIndex(e => e.code === code);
        if (codeIndex !== -1) {
            console.error("Codigo ya existente");
            return;
        }

        this.#products.push(producto);
    }   
}

// Testing de la clase
const manejadorDeProductos = new ManagerProductos();
manejadorDeProductos.addProduct("producto prueba","Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);
console.log(manejadorDeProductos.getProducts());
manejadorDeProductos.addProduct("producto prueba","Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);
console.log(manejadorDeProductos.getProducts());  // error porque el código esta repetido
console.log(manejadorDeProductos.getProductById(1));
console.log(manejadorDeProductos.getProductById(2));  // error porque no encuentra el producto



