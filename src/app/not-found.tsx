import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap article">
      <div className="empty">
        <h3>Nie ma takiej strony</h3>
        <p>Wpis mógł zostać przeniesiony albo usunięty.</p>
        <p><Link href="/" className="btn btn-teal">Wróć do bloga <span className="arr" /></Link></p>
      </div>
    </section>
  );
}
