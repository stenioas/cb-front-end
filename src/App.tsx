import Home from "./pages/Home";

import StoreProvider from "./contexts/StoreContext";

function App() {
	return (
		<StoreProvider>
			<Home />
		</StoreProvider>
	);
}

export default App;
