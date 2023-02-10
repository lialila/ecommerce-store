// import styles from './page.module.scss';

export default function CartPage() {
  return (
    <main>
      <h1>YOUR CART</h1>
      <div data-test-id="cart-product-<product id>">
        <h2>Here will be your products, when you will code it!</h2>
        <button data-test-id="cart-product-remove-<product id>">
          Remove the product
        </button>
      </div>
      <div data-test-id="cart-product-quantity-<product id>">
        Here will be quantity of the products
      </div>
      {/* should send to checkout page */}
      <button>Checkout</button>
    </main>
  );
}
