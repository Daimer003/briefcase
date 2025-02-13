
interface Commit {
  date: string | null;
}

/**
 *  
 * @param dateIso8601 La fecha del commit
 * TODO: Revisar que retorne los commits correspondientes a la fecha
 * @returns 
 */
export const getDayOfYear = (dateIso8601: any) => {
  const daysOfYear = Array.from({ length: 365 }, () => ({ date: null, commits: <any>[] }));
  //const currentDate =  new Date().getFullYear()

for(let i = 0; dateIso8601.length > i; i++){
  const date = new Date(dateIso8601[i]?.date);
    // Crear una nueva fecha al inicio del año
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    
    // Calcular la diferencia en milisegundos entre la fecha dada y el inicio del año
    const diffInMs = date.getTime() - startOfYear.getTime();
    
    // Convertir la diferencia de milisegundos a días (1 día = 24 * 60 * 60 * 1000 ms)
    const dayOfYear = Math.floor(diffInMs / (24 * 60 * 60 * 1000)) + 1;

       // Asegúrate de que dayOfYear esté dentro del rango 0-364 (para indexar del 0 al 364)
       if (dayOfYear >= 0 && dayOfYear < 365) {
        // Puedes almacenar información adicional en el objeto correspondiente del array
        daysOfYear[dayOfYear].date = dateIso8601[i]?.date;
        daysOfYear[dayOfYear].commits.push(dateIso8601[i]);
      }
}

const ultimosTresCommits = daysOfYear
  .filter((commit: Commit) => commit.date != null && typeof commit.date === 'string' && commit.date.slice(0, 4) === '2024')
  .slice(-3);  // Selecciona los últimos 3 objetos filtrados


  return{
    daysOfYear,
    ultimosTresCommits
  }
  }
  
  