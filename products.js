let product = null;

export function createProduct(nombre,descripcion,precioFotografias,precioPromociones,categoria,marca){
    product = {
        nombre:nombre,
        descripcion:descripcion,
        precioFotografias:precioFotografias,
        precioPromociones:precioPromociones,
        categoria:categoria,
        marca:marca
    }
    return product;
}

export function updateProduct(nombre,descripcion,precioFotografias,precioPromociones,categoria,marca){
    if(product){
        return "No existe el producto";
    }
        product.nombre=nombre,
        product.descripcion=descripcion,
        product.precioFotografias=precioFotografias,
        product.precioPromociones=precioPromociones,
        product.categoria=categoria,
        product.marca=marca
    
    return product;
}

export function deleteProduct(){
    return product = null;
}

export function getProduct(){
    return product;
}