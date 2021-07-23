const postUrl: string = "https://corebiz-test.herokuapp.com/api/v1/newsletter";
const getUrl: string = "https://corebiz-test.herokuapp.com/api/v1/products";

export function getProducts() {
	return fetch(getUrl)
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.error(err);
		});
}

// Teste de funcionalidade não concluido
export function registerUser(name: string, email: string) {
	fetch(postUrl, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({
			email: email,
			name: name,
		}),
	})
		.then((res) => {
			console.log(res);
			alert(res);
		})
		.catch((err) => {
			console.error(err);
		});
}
