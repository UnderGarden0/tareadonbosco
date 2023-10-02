const scriptURL = 'https://script.google.com/macros/s/AKfycbwOmw4Infy1wWjtTKPuOfOSr8KsvRyQvLVkz4nCHbLfqaMrXNTyBbS8DbuOOGVpvcX5/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => alert("Gracias! El formulario ha sido respondido satisfactoriamente"))
	.then(() => {window.location.reload(); })
	.catch(error =console.error('Error!', error.message))
})