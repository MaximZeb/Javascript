// AJAX
// json фейковый 
const requesURL = 'https://jsonplaceholder.typicode.com/users';
// GET
function senDREquest (method, url, body = null)  {
	return new Promise ((resolve, reject) => {
		const xhr = new XMLHttpRequest();

	xhr.open(method, url);
	xhr.pesponseType ="json"; 
	xhr.setReauestHeadr('Content-type', 'application/json')
	xhr.onload = () => {
		if (xhr.status >= 400) {  // это проверяет на ошибки больше 400 401 404 ошибки
			reject(xhr.response);
		} else {
			resolve(xhr.response);
		}
		console.log(xhr.response); 
	}
	xhr.onerror = () => {
		reject(xhr.response); // ошибки в сети 
	}
	xhr.send(JSON.stringify(body));
	})
	
	const headers = {
	
		'Content-Type': 'application/json'
	}

	return fetch(url, {
		method: method,
		body:JSON.stringfy(body),
		headers:headers
	}).then(response => {
		if (response.ok){
		return response.json();
	}
		return response.json().then( error => {
			const e = new Error ('Что-то пошло не так') {
				e. data = error;
				throw e;
			}
		});
	})
}
const body = {
	name: 'Zebzeev',
	age: 26
};
senDREquest ('POST', requesURL, body)
	.then(data => console.log(data))
	.catch(err => console.log(err)) 
