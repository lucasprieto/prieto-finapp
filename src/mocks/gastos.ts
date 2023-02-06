import { delay } from './utils';

export const getGastos = () =>
    delay(
        {
            expenses: [
                { description: 'expense 1' },
                { description: 'expense 2' },
                { description: 'expense 3' },
                { description: 'expense 4' },
            ],
        },
        10000
    );
