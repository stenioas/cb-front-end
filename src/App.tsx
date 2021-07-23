import Home from "./pages/Home";

import CartProvider from "./contexts/CartContext";

function App() {
	return (
		<CartProvider>
			<Home />
		</CartProvider>
	);
}

export default App;
