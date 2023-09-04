import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

function HeroSection({ title, imageUrl }) {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>
            <p>
              This website allows you to access the short and quick summaries of the latest series and movies. It provides an idea about the topic or plot of the movie, so you can decide weather you would like to watch it or not.
            </p>
            <Link href="/movie">
              <button className={mulish.className}>Explore Movies</button>
            </Link>
          </div>

          <div className={heroStyles.hero_image}>
            <Image
              src={imageUrl}
              alt="Watching Netflix"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
