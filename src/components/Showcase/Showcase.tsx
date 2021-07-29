// IMPLEMENTAR
// Carousel para a lista de produtos

import useStore from "../../hooks/useStore";
import Card from "./Card";

import styles from "./Showcase.module.scss";

export default function Showcase() {
	const { productsList } = useStore();

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Mais Vendidos</h2>
				<div className={styles.line} />
				<div className={styles.products}>
					{productsList
						? productsList.map((i) => {
								return (
									<Card
										key={i.productId}
										productId={i.productId}
										productName={i.productName}
										stars={i.stars}
										imageUrl={i.imageUrl}
										listPrice={i.listPrice}
										price={i.price}
										installments={i.installments}
									/>
								);
						  })
						: "Nenhum produto encontrado!"}
				</div>
			</div>
		</section>
	);
}
