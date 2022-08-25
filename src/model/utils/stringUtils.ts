export const maskAmount = (amount: number | undefined | string): string => {
    if (amount != null) {
        return amount?.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    }

    return '';
};
