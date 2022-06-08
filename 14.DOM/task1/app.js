//======================innerHTML========================

const body = document.body

body.innerHTML = `
<form class="create-user-form">
	<label>
		Имя
		<input type="text" name="userName" placeholder="Введите ваше имя">
	</label>
	<label>
		Пароль
		<input type="password" name="password" placeholder="Придумайте Пароль">
	</label>
	<button type="submit">
		Подтвердить
	</button>
</form>
`

// ====================createElement========================

const form = document.createElement('form')
const label1 = document.createElement('label')
const label2 = document.createElement('label')
const input1 = document.createElement('input')
const input2 = document.createElement('input')
const button = document.createElement('button')

form.className = 'create-user-form'

input1.type = 'text'
input1.name = 'userName'
input1.placeholder = 'Введите ваше имя'

input2.type = 'password'
input2.name = 'password'
input2.placeholder = 'Придумайте Пароль'

label1.textContent = 'Имя'
label2.textContent = 'Пароль'

button.type = 'submit'
button.textContent = 'Подтвердит'

label1.append(input1)
label2.append(input2)

form.append(label1)
form.append(label2)
form.append(button)

body.append(form)




