export default function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}