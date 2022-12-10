//Función para leer datos del storage

export const getData = () =>{
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData):[];
}



export const setData = info =>{
    const datos = getData();
    const datosRepetidos = datos.findIndex(dato => dato.id === info.id);

    let storageOdonto = [...datos];

    if(!datosRepetidos){

        storageOdonto.push(info);
    }
    else{
        storageOdonto = storageOdonto.filter(dato => dato.id !== info.id);
    }

    localStorage.setItem("favs",JSON.stringify(storageOdonto));

}

