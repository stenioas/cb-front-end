import {
	ReactNode,
	createContext,
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
} from "react";

interface CartContextData {
	cartCounter: number;
	setCartCounter: Dispatch<SetStateAction<number>>;
}

interface CartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export default function CartProvider({ children }: CartProviderProps) {
	const [cartCounter, setCartCounter] = useState(0);

	useEffect(() => {
		const item = localStorage.getItem("cartCounter");
		if (item) {
			setCartCounter(Number(item));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cartCounter", String(cartCounter));
	}, [cartCounter]);

	return (
		<CartContext.Provider
			value={{
				cartCounter,
				setCartCounter,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
