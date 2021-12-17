function formatarNumero(numero) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return formatter.format(numero);
}

module.exports = formatarNumero;