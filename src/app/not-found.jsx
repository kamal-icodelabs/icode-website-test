import Link from "next/link";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found | iCodelabs",
  description:
    "The page you’re looking for doesn’t exist. Explore Sharetribe marketplace development, 50+ case studies, or talk to our team.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className={css.notFoundSection}>
      <ContentWidth>
        <div className={css.inner}>
          <h1 className={css.heading}>This page doesn’t exist</h1>
          <p className={css.subheading}>But these ones do —</p>

          <ul className={css.primaryLinks}>
            <li>
              <Link href="/services/sharetribe" className={css.primaryLink}>
                Sharetribe Marketplace Development →
              </Link>
            </li>
            <li>
              <Link href="/casestudy" className={css.primaryLink}>
                See Our 50+ Marketplace Builds →
              </Link>
            </li>
            <li>
              <Link href="/contact" className={css.primaryLink}>
                Talk to Our Team →
              </Link>
            </li>
          </ul>

          <p className={css.helper}>
            Looking for something specific? Try our{" "}
            <Link href="/blog" className={css.helperLink}>
              blog
            </Link>{" "}
            or{" "}
            <Link href="/casestudy" className={css.helperLink}>
              case studies
            </Link>
            .
          </p>
        </div>
      </ContentWidth>
    </section>
  );
}
