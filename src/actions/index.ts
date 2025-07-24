export async function action( { request } ) {
    const data =  Object.fromEntries( await request.formData());
    let error = '';

    if(Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    }
    
    if(error.length){
        return error
    }
    return {}
}