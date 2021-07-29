import {
	ReactNode,
	createContext,
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
} from "react";

import api from "../services/api";
import { Products } from "../utils/types";

interface StoreContextType {
	cartCounter: number;
	setCartCounter: Dispatch<SetStateAction<number>>;
	productsList: Products | undefined;
	setProductsList: Dispatch<SetStateAction<Products | undefined>>;
}

interface StoreProviderProps {
	children: ReactNode;
}

export const StoreContext = createContext({} as StoreContextType);

export default function StoreProvider({ children }: StoreProviderProps) {
	const [cartCounter, setCartCounter] = useState(0);
	const [productsList, setProductsList] = useState<Products>();

	useEffect(() => {
		api
			.get("products")
			.then((response) => {
				setProductsList(response.data);
			})
			.catch((err) => {
				console.error(err);
			});

		const item = localStorage.getItem("cartCounter");
		if (item) {
			setCartCounter(Number(item));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cartCounter", String(cartCounter));
	}, [cartCounter]);

	return (
		<StoreContext.Provider
			value={{
				cartCounter,
				setCartCounter,
				productsList,
				setProductsList,
			}}
		>
			{children}
		</StoreContext.Provider>
	);
}
