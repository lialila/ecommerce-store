'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      OOPS! SOMETHING WENT WRONG
      <p>{error.message}</p>
    </div>
  );
}
