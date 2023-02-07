'use client';

export default function RootError({ error, reset }) {
  // console.log(props);
  return (
    <div>
      OOPS! SOMETHING WENT WRONG
      <p>{error.message}</p>
    </div>
  );
}
