let product = null;

export function createProduct(nombre,descripcion,precioFotografias,precioPromociones,categoria,tipoEvento){
    product = {
        nombre:nombre,
        descripcion:descripcion,
        precioFotografias:precioFotografias,
        precioPromociones:precioPromociones,
        categoria:categoria,
        tipoEvento:tipoEvento
    }
    return product;
}

export function updateProduct(nombre,descripcion,precioFotografias,precioPromociones,categoria,tipoEvento){
    if(product){
        return "No existe el producto";
    }
        product.nombre=nombre,
        product.descripcion=descripcion,
        product.precioFotografias=precioFotografias,
        product.precioPromociones=precioPromociones,
        product.categoria=categoria,
        product.tipoEvento=tipoEvento
    
    return product;
}

export function deleteProduct(){
    return product = null;
}

export function getProduct(){
    return product;
}