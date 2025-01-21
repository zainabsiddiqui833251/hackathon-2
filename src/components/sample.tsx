import { fetchProducts } from '../sanity/lib/sanity'; // Adjust path to your fetch function

type Product = {
  id: string;
  name: string;
  imagePath: string;
  price: string;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
};

export async function getServerSideProps() {
  const products: Product[] = await fetchProducts();

  return {
    props: {
      products,  // Pass products as props
    },
  };
}

const Sample= ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h1>Featured Products</h1>
      <div>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <img src={product.imagePath} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>In stock: {product.stockLevel}</p>
              <p>Category: {product.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
