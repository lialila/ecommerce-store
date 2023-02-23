'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutButton() {
  const router = useRouter();

  return (
    <Link href="/../checkout">
      <button
        onClick={(e) => {
          e.preventDefault();
          router.push('../checkout');
        }}
      >
        Checkout
      </button>
    </Link>
  );
}
