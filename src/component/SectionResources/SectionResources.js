"use client";

import React, { useEffect, useRef, useState } from "react";
import css from "./SectionResources.module.css";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ContentWidth from "../ContentWidth/ContentWidth";
import Link from "next/link";
import { blogDetail } from "@/services/service";

function pickStrapiFormat(imageAttrs, preference) {
  if (!imageAttrs) return null;
  const f = imageAttrs.formats;
  for (const key of preference) {
    if (f?.[key]?.url) return f[key];
  }
  return { url: imageAttrs.url, width: imageAttrs.width, height: imageAttrs.height };
}

const SectionResources = ({
  blog = [],
  usedInBlog,
  bg,
  showOnHomepage = false,
  readmoreBtn,
  heading,
  filterTypes = [],
}) => {
  const [blogs, setBlogs] = useState(blog);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const isUsedInBlog = usedInBlog === "true";
  const hasBlogs = blogs.length > 0;

  // Only set up IO if we actually need to fetch (i.e. no blog prop already supplied
  // and we have a filter / homepage flag that would trigger a fetch).
  const shouldFetch =
    (showOnHomepage || filterTypes.length > 0) && blog.length === 0;

  // Defer the fetch until the section scrolls into view (or close to it).
  // rootMargin gives the network call ~600px of head-start before the user reaches the block.
  useEffect(() => {
    if (!shouldFetch) return;
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      // Older browsers — fall back to fetching immediately.
      setInView(true);
      return;
    }
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldFetch]);

  // Run the fetch once the section is in view.
  useEffect(() => {
    if (!inView) return;
    if (blogs.length > 0) return;

    let cancelled = false;
    const loadBlogs = async () => {
      setIsLoading(true);
      try {
        const fetchedBlogs = await blogDetail(filterTypes);
        const normalized = fetchedBlogs?.data?.data || [];
        if (!cancelled) setBlogs(normalized);
      } catch (err) {
        if (!cancelled) setError("Failed to load blogs. Please try again later.");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    loadBlogs();
    return () => {
      cancelled = true;
    };
  }, [inView]);

  return (
    <section ref={sectionRef}>
      <div
        className={css.SectionBlogWrapper}
        style={bg ? { backgroundColor: bg } : undefined}
      >
        <ContentWidth>
          {heading ? (
            <h2>{heading}</h2>
          ) : isUsedInBlog ? (
            <div className={css.blogHeading}>
              <h5 className={css.ourBlogSmall}>Our Blogs</h5>
              <h2>
                From the Marketplace
                <br /> Development Blog
              </h2>
            </div>
          ) : (
            <div className={css.contentContainer}>
              <div>
                <span className="subTitle">OUR BLOG</span>
                <h2 className="headingTwo">
                  From the Marketplace Development Blog
                </h2>
              </div>
              <Link href="/blog" className="primaryBtn">
                More Blogs <IconCollection name="rightArrowTop" />
              </Link>
            </div>
          )}

          <div className={css.cardWrapper}>
            {isLoading ? (
              <div className={css.loadingMessage}>
                <p>Loading blogs...</p>
              </div>
            ) : error ? (
              <div className={css.errorMessage}>
                <p>{error}</p>
                <Link href="/blog" className="primaryBtn">
                  Visit Blog <IconCollection name="rightArrowTop" />
                </Link>
              </div>
            ) : hasBlogs ? (
              <Swiper
                spaceBetween={20}
                className="blogCarousel"
                slidesPerView={1}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2.2 },
                  1280: { slidesPerView: 3 },
                }}
              >
                {blogs.map(({ id, attributes }) => {
                  const {
                    Title,
                    Type,
                    Slug,
                    Image: imageData,
                  } = attributes || {};
                  const imgFmt = pickStrapiFormat(imageData?.data?.[0]?.attributes, ['small', 'medium']);
                  const rawDate =
                    attributes?.publishedAt || attributes?.createdAt;
                  const formattedDate = rawDate
                    ? new Date(rawDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "";

                  return (
                    <SwiperSlide key={id}>
                      <Link
                        href={`/blog/${Slug}`}
                        className="textBtn"
                        aria-label={`Read more: ${Title || "Blog article"}`}
                      >
                        <div className={css.cardContainer}>
                          {imgFmt && (
                            <Image
                              src={imgFmt.url}
                              width={imgFmt.width}
                              height={imgFmt.height}
                              alt={Title || "Blog image"}
                              loading="lazy"
                              unoptimized
                            />
                          )}
                          <div className={css.cardBottom}>
                            <div className={css.blogDate}>{formattedDate}</div>
                            <h6>{Title}</h6>
                            {Type && <div className={css.badge}>{Type}</div>}
                            <span className={css.readMoreButton}>
                              Read more <IconCollection name="arrowUpBlue" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <div className={css.noBlogsMessage}>
                <p>Check out our latest insights and resources on our blog.</p>
                <Link href="/blog" className="primaryBtn">
                  Visit Blog <IconCollection name="rightArrowTop" />
                </Link>
              </div>
            )}
          </div>

          {readmoreBtn && (
            <Link href={"/blog"} className={css.readmoreBtn}>
              Read More Blog <IconCollection name={"rightArrowTop"} />
            </Link>
          )}
        </ContentWidth>
      </div>
    </section>
  );
};

export default SectionResources;
