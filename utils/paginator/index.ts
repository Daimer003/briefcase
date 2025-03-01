

/**
 * 
 * @param data: los datos que se van a mostrar
 * @param itemsPerPage: numero de filas que se van a mostrar en la tabla
 * @param currentPage: pagina inicial
 * @returns visibleData: la nueva data
 */
export const paginator = (data: any, itemsPerPage: any, currentPage: any) => {

    //* Asegúrese de que los datos sean una matriz y estén definidos
    const dataPager = Array.isArray(data) ? data : [];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleData = dataPager.slice(startIndex, startIndex + itemsPerPage).map((item: any, index: any) => {
        return {
            id: startIndex + index + 1,
            ...item,
        };
    });

    const pageSize = 4; // Número de ítems por página
    const totalPages = Math.ceil((data?.length || 0) / pageSize);
   
    //* Mostrar solo 3 posiciones a la vez
    const maxPagesToShow = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    //* Ajustar el inicio si estamos cerca del final
    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }


    return {
        totalItem: data?.length,
        currentPage: currentPage,
        endPage: endPage,
        startPage: startPage,
        totalPages: totalPages,
        visibleData: visibleData
    }
} 