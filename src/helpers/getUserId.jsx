const getUserId = async (userId) => {
    const url = "https://jsonplaceholder.typicode.com/users/"+userId;
    const res = await fetch(url) /* Para utilizar el await se necesita de que la funcion este 
    dentro de un formato async */
    const user = await res.json() /* Esta comando nos recarga la información de la api que 
    estamos solicitando */
    return user
}

export default getUserId

/*const response = await fetch(`https://jsonplaceholder.typicode.com/users/${datos.id}`);
const data = await response.json();
*/