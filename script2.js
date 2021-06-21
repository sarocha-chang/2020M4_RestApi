function addStudentToTable(index, student) {
	const tableBody = document.getElementById('tableBody')
	let row = document.createElement('tr')
	let cell = document.createElement('th')
	cell.setAttribute('score', 'row')
	cell.innerHTML = index
	row.appendChild(cell)
	cell = document.createElement('td')
	cell.innerHTML = `${student.name} ${student.surname}`
	row.appendChild(cell)
	cell = document.createElement('td')
	//cell.innerHTML = student.username
	let img = document.createElement('img')
	img.setAttribute('src', student.image)
    img.height = 200
    // img.classList.add('img-thumbnail')
	cell.appendChild(img)
	row.appendChild(cell)
	cell = document.createElement('td')
	cell.innerHTML = student.gender
	row.appendChild(cell)

	cell = document.createElement('td')
	let button = document.createElement('button')
	button.classList.add('btn')
	button.classList.add('btn-danger')
	button.setAttribute('type', 'button')
	button.innerText = 'delete'
	button.addEventListener('click', (event) => { 

		let confirmMsg = confirm(`ท่านต้องการลบคุณ ${student.name} หรือไม่`)
		if (confirmMsg) {
			deleteStudent(student.id)
		}
	})
	cell.appendChild(button)
	row.appendChild(cell)
	tableBody.appendChild(row)

}

