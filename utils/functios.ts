

//* Función para verificar si hay una clave sin valor
export const validateField = (data: any) => {
    for (const clave in data) {
        if (data.hasOwnProperty(clave) && data[clave] === "" && data[clave] != null) {

            return { emptyField: true };
        }
    }
    return { emptyField: false };
}