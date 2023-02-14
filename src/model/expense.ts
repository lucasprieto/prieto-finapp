export enum PaymentMethod {
    cash = 'Efectivo',
    credit = 'Credito',
    debit = 'Debito',
}

export type Expense = {
    _id: string;
    date: string;
    description: string;
    paymentMethod: string;
    instalments?: number;
    value: number;
};
