import Link from "next/link";
import styles from "./index.module.css";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about/0">About</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/newsletter">Newsletter</Link>
        </li>
      </nav>
    </div>
  );
}
