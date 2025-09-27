"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void; // опціонально: для повторного запиту
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return <p>Could not fetch the list of notes. {error.message}</p>;
}
