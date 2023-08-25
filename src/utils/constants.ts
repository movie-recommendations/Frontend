export const API_BASE_URL = 'http://kinotochka.acceleratorpracticum.ru/api/v1';

export const GENRESv2 = [
	'Комедия',
	'Ужасы',
	'Мультфильм',
	'Фантастика',
	'Триллер',
	'Боевик',
	'Мелодрама',
	'Приключение',
	'Семейные',
	'Спорт',
	'Аниме',
];

export const VALIDATION_SETTINGS = {
	email: {
		pattern:
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		// minLength: 7,
		maxLength: 64,
		messages: {
			noEmail: 'Необходимо ввести email',
			invalid: 'Необходимо ввести email в правильном формате',
			// tooShort: 'Слишком короткий email',
			tooLong: 'Слишком длинный email',
		},
	},
	password: {
		pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]+$/,
		minLength: 8,
		maxLength: 32,
		messages: {
			noPassword: 'Необходимо ввести пароль',
			noRepeatPassword: 'Необходимо повторно ввести пароль',
			invalid: 'Необходимо ввести пароль в правильном формате',
			tooShort: 'Слишком короткий пароль',
			tooLong: 'Слишком длинный пароль',
			noMatch: 'Пароли не совпадают',
		},
	},
	nickname: {
		pattern: /^[a-zа-яё\s]+$/iu,
		maxLength: 32,
		messages: {
			invalid: 'Только кириллица или латинские буквы',
			tooLong: 'Слишком длинный никнейм',
		},
	},
	dateOfBirth: {
		min: '1923-01-01',
		max: '2018-01-01',
		messages: {
			invalid: 'Введите корректную дату',
		},
	},
};

export const EMAIL_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.email.messages.noEmail,
	},
	pattern: {
		value: VALIDATION_SETTINGS.email.pattern,
		message: VALIDATION_SETTINGS.email.messages.invalid,
	},

	// minLength: {
	// 	value: VALIDATION_SETTINGS.email.minLength,
	// 	message: VALIDATION_SETTINGS.email.messages.tooShort,
	// },
	maxLength: {
		value: VALIDATION_SETTINGS.email.maxLength,
		message: VALIDATION_SETTINGS.email.messages.tooLong,
	},
};

export const PASSWORD_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.password.messages.noPassword,
	},
	pattern: {
		value: VALIDATION_SETTINGS.password.pattern,
		message: VALIDATION_SETTINGS.password.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.password.minLength,
		message: VALIDATION_SETTINGS.password.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.password.maxLength,
		message: VALIDATION_SETTINGS.password.messages.tooLong,
	},
};

export const NICKNAME_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.password.messages.noPassword,
	},
	pattern: {
		value: VALIDATION_SETTINGS.nickname.pattern,
		message: VALIDATION_SETTINGS.nickname.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.nickname.maxLength,
		message: VALIDATION_SETTINGS.nickname.messages.tooLong,
	},
};

export const DATE_OF_BIRTH_VALIDATION_CONFIG = {
	min: {
		value: VALIDATION_SETTINGS.dateOfBirth.min,
		message: VALIDATION_SETTINGS.dateOfBirth.messages.invalid,
	},
	max: {
		value: VALIDATION_SETTINGS.dateOfBirth.max,
		message: VALIDATION_SETTINGS.dateOfBirth.messages.invalid,
	},
};
