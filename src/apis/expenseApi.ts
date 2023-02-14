import client from './client';
import { Expense } from '@/model';

export async function getAllExpenses(): Promise<Expense[]> {
    const response = await client.get('/expense');
    return response.data.data;
}

export async function getAllExpensesByPeriod(
    year: number,
    month: number
): Promise<Expense[]> {
    const response = await client.get('/expense', { params: { year, month } });
    return response.data.data;
}

export async function getExpense(id: string) {}

export async function updateExpense(id: string, expense: Expense) {}

export async function createExpense(expense: Expense) {}

export async function deleteExpense(id: string) {}
