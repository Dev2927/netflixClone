import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Image from 'next/image'
import Nav from "@/app/components/Nav"

function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/" >
          <Image src="/logoNew.png" alt="Image is loading" width={150} height={100}/>
        </Link>
      </div>

      <Nav/>
    </header>
  )
}

export default Header
