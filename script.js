const questions = document.querySelectorAll('.quest');
const inputEmail = document.querySelectorAll('.email');
inputEmail.forEach((emails) => {
	emails.addEventListener('input', () => {
		if (emails.value === '') {
			emails.classList.remove('active');
		} else {
			emails.classList.add('active');
		}
	});
});

questions.forEach((question) => {
	question.addEventListener('click', () => {
		const answer = question.nextElementSibling;
		const symbol = question.querySelector('span');

		const answers = document.querySelectorAll('.answer');

		answers.forEach((ans) => {
			ans.classList.remove('show');
			ans.previousElementSibling.querySelector('span').textContent = '+';
		});

		if (!answer.classList.contains('show')) {
			answer.classList.add('show');
			symbol.textContent = '-';
		} else {
			answer.classList.remove('show');
			symbol.textContent = '+';
		}
	});
});

inputEmail;
