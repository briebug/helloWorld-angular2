export interface IPerson {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

export class PeopleService {
	constructor() { }

	listAll() {
		return window.fetch('/api/people')
			.then(function(res) {
				return res.text();
			})
			.then(function(data) {
				return JSON.parse(data);
			});
	}
}