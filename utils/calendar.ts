const date = new Date();
// Obtiene el número del mes actual (0-11)


export const getDayOfYear = (date: Date): number => {
    // Crear una nueva fecha al inicio del año
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    
    // Calcular la diferencia en milisegundos entre la fecha dada y el inicio del año
    const diffInMs = date.getTime() - startOfYear.getTime();
    
    // Convertir la diferencia de milisegundos a días (1 día = 24 * 60 * 60 * 1000 ms)
    const dayOfYear = Math.floor(diffInMs / (24 * 60 * 60 * 1000)) + 1;
    
    return dayOfYear;
  }
  
  // Ejemplo de uso:
  const today = new Date();
  console.log(getDayOfYear(today)); // Devuelve el número de día actual del año
  