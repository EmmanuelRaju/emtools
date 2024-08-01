export interface IExpenseItem {
	id: string;
	name: string;
	amount: number;
	paidBy?: {
		personId: string;
		amount: number;
	}[];
	peopleInvolved: Partial<IPerson>[];
}

export interface IPerson {
	id: string;
	name: string;
	upiId?: string;
	gender?: 'male' | 'female';
}

export interface IExpense {
	id: string;
	name: string;
	expenses: IExpenseItem[];
}
