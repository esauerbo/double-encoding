import Link from "next/link";

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/page1">Go to Page 1</Link>
        </li>
        <li>
          <Link href="/page2">Go to Page 2</Link>
        </li>
      </ul>
    </nav>
  );
}
