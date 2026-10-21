import Link from "next/link";
export default function NotFound() { return <main className="not-found"><p className="eyebrow">RECIPE NOT FOUND</p><h1>That recipe isn't in our box.</h1><Link className="button-link" href="/">Back to recipes</Link></main>; }
