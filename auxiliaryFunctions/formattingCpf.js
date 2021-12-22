function formattingCpf(cpf)
{
    const digits = cpf.replace(/[^\d]/g, "")
    const formattedCpf = digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    return formattedCpf
}


module.exports = formattingCpf