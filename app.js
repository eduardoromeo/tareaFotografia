import { createProduct } from "./products.js";
import { updateProduct } from "./products.js";
import { deleteProduct } from "./products.js";
import { getProduct } from "./products.js";

console.log('Creando producto:');
createProduct('Fanta','desc-1',120,125,'refrescos','Coca Cola');
console.log(getProduct());
console.log('Actualizar producto');
updateProduct('Higienicos perlita','desc-2',50,70,'higienicos','Perlita');
console.log(getProduct());
console.log('Borrando producto');
deleteProduct();
console.log(getProduct());