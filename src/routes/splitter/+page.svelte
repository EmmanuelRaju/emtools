<script lang="ts">
	import { Expense, Person } from '.';

	const expense: Expense = new Expense('expense');

	let addPersonForm: HTMLFormElement;

	let persons: Person[] = [];

	const addPerson = () => {
		const formData: FormData = new FormData(addPersonForm);
		const personObj = Object.fromEntries(formData);
		if (personObj.name) {
			const person = new Person(personObj.name as string);
			if (personObj.upiId) person.upiId = personObj.upiId as string;
			if (personObj.gender) person.gender = personObj.gender as 'male' | 'female';
			persons.push(person);
			console.log('persons', persons);
			addPersonForm.reset();
		}
	};
</script>

<h1>splittER</h1>

<form bind:this={addPersonForm} name="addPerson" on:submit|preventDefault={addPerson}>
	<h2>add person</h2>
	<label for="name">name<span>*</span></label>
	<input type="text" name="name" id="name" required />
	<label for="upiId">UPI</label>
	<input type="text" name="upiId" id="upiId" />
	<p>gender</p>
	<input type="radio" name="gender" id="genderMale" value="male" />
	<label for="genderMale">male</label>
	<input type="radio" name="gender" id="genderFemale" value="female" />
	<label for="genderFemale">female</label>
	<button type="submit">Add</button>
</form>
