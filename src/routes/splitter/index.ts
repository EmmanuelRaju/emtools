import type { IExpense, IExpenseItem, IPerson } from './models';

export class ExpenseItem implements IExpenseItem {
	id: string;
	name: string;
	amount: number;
	paidBy: { personId: string; amount: number }[] = [];
	peopleInvolved: Partial<IPerson>[] = [];

	constructor(name: string, amount: number) {
		this.id = crypto.randomUUID();
		this.name = name;
		this.amount = amount;
	}

	addPaidBy(personId: string, amount: number): void {
		this.paidBy.push({ personId, amount });
	}

	removePaidBy(personId: string): void {
		this.paidBy = this.paidBy.filter((item) => item.personId !== personId);
	}

	get perShare() {
		if (this.peopleInvolved.length > 0) {
			return Math.round(this.amount / this.peopleInvolved.length);
		} else return null;
	}
}

export class Person implements IPerson {
	id: string;
	name: string;
	upiId?: string;
	gender?: 'male' | 'female';

	constructor(name: string, upiId: string = '', gender: 'male' | 'female' | undefined = undefined) {
		this.id = crypto.randomUUID();
		this.name = name;
		if (upiId) this.upiId = upiId;
		if (gender) this.gender = gender;
	}
}

export class Expense implements IExpense {
	id: string;
	name: string;
	expenses: IExpenseItem[] = [];

	constructor(name: string) {
		this.id = crypto.randomUUID();
		this.name = name;
	}

	addExpense(expenseItem: IExpenseItem) {
		this.expenses.push(expenseItem);
	}

	removeExpense(expenseId: string) {
		this.expenses = this.expenses.filter((item) => item.id !== expenseId);
	}
}
