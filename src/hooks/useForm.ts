import React from "react";

// Types armazena todos os tipos de input

interface IFormTypes {
	[propertyName: string]: {
		regex: RegExp;
		message: string;
	};
}

const formTypes: IFormTypes = {
	email: {
		regex:
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		message: "Preencha um email válido",
	},
	password: {
		regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		message: "A senha não obedece os requisitos.",
	},
	number: {
		regex: /^\d+$/,
		message: "Utilize números apenas.",
	},
	username: {
		regex: /[a-zA-Z]/,
		message: "Utilize letras apenas.",
	},
};

type TypeForm = string;
type StateForm = string | null;

const useForm = (type: TypeForm): any => {
	const [value, setvalue] = React.useState<StateForm>("");
	const [error, setError] = React.useState<StateForm>("");

	// valida o input de acordo com o tipo
	const validate = (arg: string | null): boolean => {
		if (arg === null) return false;
		if (arg.length === 0) {
			setError("Preencha um valor");
			return false;
		}
		if (formTypes[type] && !formTypes[type].regex.test(arg)) {
			setError(formTypes[type].message);
			return false;
		}
		setError(null);
		return true;
	};

	type HandleChangeType = (event: React.FormEvent) => void;
	const onChange: HandleChangeType = ({ target }) => {
		if (error) validate((target as HTMLInputElement).value);
		setvalue((target as HTMLInputElement).value);
	};

	// retorna as validações para o input
	return {
		value,
		setvalue,
		onChange,
		error,
		validate: () => validate(value), // passa a validação já ativada
		onBlur: () => validate(value),
	};
};

export default useForm;
