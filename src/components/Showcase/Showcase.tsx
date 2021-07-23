// PENDENTE
// Implementar construção da vitrine consumindo a api fornecida
// Implementar carousel para a lista de produtos

import Card from "./Card";
import { getProducts } from "../../services/api";

import styles from "./Showcase.module.scss";

export default function Showcase() {
	const products = getProducts();
	// Teste de retorno da promise
	console.log(products);

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Mais Vendidos</h2>
				<div className={styles.line} />
				<div className={styles.products}>
					<Card
						productId={1}
						productName="SAPATO FLOATER PRETO"
						stars={5}
						imageUrl="https://corebiz-test.herokuapp.com/images/product-1.png"
						listPrice={29900}
						price={39900}
						installments={[]}
					/>
					<Card
						productId={2}
						productName="SAPATO FLOATER PRETO"
						stars={5}
						imageUrl="https://corebiz-test.herokuapp.com/images/product-2.png"
						listPrice={29900}
						price={39900}
						installments={[]}
					/>
					<Card
						productId={3}
						productName="SAPATO FLOATER PRETO"
						stars={5}
						imageUrl="https://corebiz-test.herokuapp.com/images/product-3.png"
						listPrice={29900}
						price={39900}
						installments={[]}
					/>
					<Card
						productId={1}
						productName="SAPATO FLOATER PRETO"
						stars={5}
						imageUrl="https://corebiz-test.herokuapp.com/images/product-4.png"
						listPrice={29900}
						price={39900}
						installments={[]}
					/>
				</div>
			</div>
		</section>
	);
}
