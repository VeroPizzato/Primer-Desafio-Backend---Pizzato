class ProductManager {

    #products
    constructor() {
        this.#products = [];
    };

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        const prod = getProducts();
        if (prod.length === 0) {
            producto.id = 1;
        } else {
            producto.id = prod[prod.length - 1].id + 1;
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

        const codeIndex = prod.findIndex(e => e.code === code);
        if (codeIndex !== -1) {
            console.error("Codigo ya existente");
            return;
        }

        prod.push(producto);
    }

    getProducts = () => {
        return products;
    }

    getProductById = (id) => {
        const codeIndex = products.findIndex(e => e.id === id);
        if (codeIndex === -1) {
            return (`Producto con ID: ${id} Not Found`);
        } else {
            return products[codeIndex];
        }
    }
}

const manejadorDeProductos = new ManagerProductos();
const prod = getProducts();
prod.addProduct("producto prueba","Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);
prod = getProducts();
console.log(prod);
prod.addProduct("producto prueba","Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);
console.log(prod);  // error porque el código esta repetido
const producto = getProductById(1);
console.log(producto);
producto = getProductById(2); 
console.log(producto);  // error porque no encuentra el producto



