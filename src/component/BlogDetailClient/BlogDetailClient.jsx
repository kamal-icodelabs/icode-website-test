"use client";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import BuildDreamForm from "@/component/BuildDreamForm/BuildDreamForm";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import FB from "../../assets/imgs/icons/darkSocialIcons/fb.svg";
import IG from "../../assets/imgs/icons/darkSocialIcons/ig.svg";
import LD from "../../assets/imgs/icons/darkSocialIcons/in.svg";
import X from "../../assets/imgs/icons/darkSocialIcons/x.svg";
import css from "./BlogDetails.module.css";
import classNames from "classnames";

function pickStrapiFormat(imageAttrs, preference) {
  if (!imageAttrs) return null;
  const f = imageAttrs.formats;
  for (const key of preference) {
    if (f?.[key]?.url) return f[key];
  }
  return { url: imageAttrs.url, width: imageAttrs.width, height: imageAttrs.height };
}

const BlogDetailsClient = ({ blogData, recentBlogs, relatedPage }) => {
  const [result, setResult] = useState(blogData);
  const [headings, setHeadings] = useState([]); // { id, text }
  const [activeHeading, setActiveHeading] = useState("");
  const observerRef = useRef(null);
  const decodedContent = useMemo(() => {
    const raw = result?.attributes?.Content ?? "";
    if (!raw.includes("&")) return raw;
    return raw
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/gi, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&");
  }, [result?.attributes?.Content]);

  // Helper to build headings from rendered DOM (.markdown-content h2)
  const buildHeadingsFromDOM = useCallback(() => {
    const nodeList = document.querySelectorAll(".markdown-content h2");
    const nodes = Array.from(nodeList);

    const newHeadings = nodes.map((el, idx) => {
      let id = el.getAttribute("id");
      if (!id) {
        id = `heading-${idx}-${nanoid()}`;
        el.setAttribute("id", id);
      }
      return { id, text: el.textContent.trim() };
    });

    setHeadings(newHeadings);

    // If there's no active heading yet, set the first (optional)
    if (newHeadings.length > 0 && !activeHeading) {
      setActiveHeading((prev) => prev || newHeadings[0].id);
    }
  }, [activeHeading]);

  // Run after markdown renders (build TOC from DOM)
  useEffect(() => {
    // Wait a tick to let react-markdown render
    const t = window.setTimeout(() => {
      buildHeadingsFromDOM();
    }, 50);

    return () => {
      clearTimeout(t);
    };
  }, [result?.attributes?.Content, buildHeadingsFromDOM]);

  // IntersectionObserver: observe actual h2 elements (from DOM)
  useEffect(() => {
    if (!headings || headings.length === 0) return;

    // cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Filter visible entries and sort by vertical position (closest to top first)
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveHeading(visible[0].target.id);
          return;
        }

        // If none are intersecting, attempt to pick the heading nearest above the viewport top
        // (useful when near bottom of page or rootMargin excludes intersections)
        const allRects = headings
          .map((h) => {
            const el = document.getElementById(h.id);
            return el ? { id: h.id, top: el.getBoundingClientRect().top } : null;
          })
          .filter(Boolean);
        if (allRects.length > 0) {
          // choose the one with smallest positive top OR the greatest negative top (closest)
          const near = allRects.reduce((best, cur) => {
            if (!best) return cur;
            const bestDist = Math.abs(best.top);
            const curDist = Math.abs(cur.top);
            return curDist < bestDist ? cur : best;
          }, null);
          if (near) setActiveHeading(near.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    observerRef.current = observer;

    // Observe the actual DOM nodes
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [headings]);

  // Memoized recent blogs
  const sortedRecentBlogs = useMemo(
    () =>
      Array.isArray(recentBlogs)
        ? [...recentBlogs]
            .sort(
              (a, b) =>
                new Date(b.attributes.publishedAt || b.attributes.createdAt) - new Date(a.attributes.publishedAt || a.attributes.createdAt)
            )
            .slice(0, 3)
        : [],
    [recentBlogs]
  );

  // Renderers — keep simple. We don't need to generate ids here because buildHeadingsFromDOM will patch missing ids.
  const renderers = useMemo(
    () => ({
      h2: ({ children }) => {
        // render h2 without trying to compute id here
        return <h2>{children}</h2>;
      },
      table: ({ children }) => (
        <div className={css.tableWrap}>
          <table className={css.markdownTable}>{children}</table>
        </div>
      ),
    }),
    []
  );


  const publishedAt = result?.attributes?.publishedAt || result?.attributes?.createdAt;
  const humanDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <div className={css.blogSinglePagebanner}>
        <div className={css.glowLeft} />
        <div className={css.glowRight} />
        <ContentWidth>
          <div className={css.contentContainer}>
            <span className="subTitle">Blog / Custom Software Development</span>
            <h1>{result?.attributes?.Title || "Blog Post"}</h1>
            <div className={css.bottomTextBanner}>
              <p>{result?.attributes?.Author || "Jay Tiwary"}</p>
              <span />
              <time dateTime={publishedAt}>{humanDate}</time>
            </div>
          </div>
        </ContentWidth>
      </div>

      <ContentWidth>
        <div className={css.BlogSinglePageContentWrapper}>
          {/* LEFT SIDEBAR */}
          <div className={css.leftContainer}>
            <div className={`${css.customScroll} ${css.listWrapper}`}>
              <h2 className={css.tocHeading}>In This Article</h2>
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={classNames(
                    activeHeading === heading.id ? css.activeTab : css.inactiveTab,
                    css.listLink
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(heading.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                      setActiveHeading(heading.id);
                    }
                  }}
                  aria-current={activeHeading === heading.id ? "true" : "false"}
                >
                  {heading.text}
                </a>
              ))}
            </div>

            <div className={css.dropdownWrapper}>
              <select
                id="security-dropdown"
                className={css.customSelect}
                value={
                  headings.findIndex((h) => h.id === activeHeading) !== -1
                    ? String(headings.findIndex((h) => h.id === activeHeading))
                    : ""
                }
                onChange={(e) => {
                  const idx = Number(e.target.value);
                  const headingId = headings[idx]?.id;
                  const element = document.getElementById(headingId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                    setActiveHeading(headingId);
                  }
                }}
                aria-label="Navigate to section"
              >
                <option value="">Select a section</option>
                {headings.map((item, index) => (
                  <option key={item.id} value={index}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>

            <div className={css.socialMediaWrapper}>
              <p>SHARE</p>
              <span />
              <div className={css.Iconswrapper}>
                <Link href="https://linkedin.com" aria-label="Share on LinkedIn">
                  <Image src={LD} width={12} height={12} alt="" loading="lazy" />
                </Link>
                <Link href="https://facebook.com" aria-label="Share on Facebook">
                  <Image src={FB} width={12} height={12} alt="" loading="lazy" />
                </Link>
                <Link href="https://instagram.com" aria-label="Share on Instagram">
                  <Image src={IG} width={12} height={12} alt="" loading="lazy" />
                </Link>
                <Link href="https://x.com" aria-label="Share on X">
                  <Image src={X} width={12} height={12} alt="" loading="lazy" />
                </Link>
              </div>
            </div>

            <BuildDreamForm />
          </div>

          {/* RIGHT CONTENT */}
          <div className={css.rightContainer}>
            {result && (
              <>
                {result?.attributes?.Image?.data?.[0]?.attributes && (() => {
                  const fmt = pickStrapiFormat(result.attributes.Image.data[0].attributes, ['large', 'medium', 'small']);
                  return fmt && (
                    <Image
                      src={fmt.url}
                      width={fmt.width}
                      height={fmt.height}
                      alt={result?.attributes?.Title || "Blog image"}
                      className={css.blogContentImage}
                      priority
                      unoptimized
                    />
                  );
                })()}

                <div className={classNames("markdown-content", css.markdownContent)}>
                  <Markdown
                    components={renderers}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {decodedContent}
                  </Markdown>
                </div>

                {result.attributes.points?.map((pt, index) => (
                  <div key={index}>
                    <h3>{pt?.point}</h3>
                    <p>{pt?.description}</p>
                    {pt?.description2 && <p>{pt?.description2}</p>}
                  </div>
                ))}

                {result.attributes.conclusion && <p>{result.attributes.conclusion}</p>}
                {result.attributes.conclusion2 && <p>{result.attributes.conclusion2}</p>}
              </>
            )}

            {/* CONTEXTUAL CTA: internal link to relevant commercial page */}
            {relatedPage && (
              <div className={css.relatedService}>
                <p>
                  Built by iCodelabs — Sharetribe Vetted Expert Partner with 50+
                  marketplace builds.
                </p>
                <Link href={relatedPage}>
                  See our marketplace development services →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* RECENT BLOGS */}
        {sortedRecentBlogs.length > 0 && (
          <div className={css.recentBlog}>
            <div className={css.contentContainer}>
              <h2>Related Blogs</h2>
            </div>
            <div className={css.recentBlogWrapper}>
              <Swiper
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 20 },
                  600: { slidesPerView: 2, spaceBetween: 20 },
                  1200: { slidesPerView: 3, spaceBetween: 20 },
                }}
                className="mySwiper"
                preloadimages="false"
                lazy="true"
              >
                {sortedRecentBlogs.map((i) => {
                  const cardImgFmt = pickStrapiFormat(i?.attributes?.Image?.data?.[0]?.attributes, ['small', 'medium']);
                  return (
                    <SwiperSlide key={i.id}>
                      <div className={css.cardContainer}>
                        {cardImgFmt && (
                          <Image
                            src={cardImgFmt.url}
                            width={cardImgFmt.width}
                            height={cardImgFmt.height}
                            alt={i?.attributes?.Title || "Blog image"}
                            loading="lazy"
                            unoptimized
                          />
                        )}
                        {i.attributes?.Type && <div className={css.badge}>{i.attributes.Type}</div>}
                        <h3 className={css.relatedTitle}>{i.attributes?.Title}</h3>
                        <div className={css.badgeNdate}>
                          <Link
                            href={`/blog/${i.attributes?.Slug}`}
                            className="textBtn"
                            aria-label={`Read more about ${i.attributes?.Title}`}
                          >
                            Read More <IconCollection name="arrowUpBlue" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        )}
      </ContentWidth>
    </>
  );
};

export default BlogDetailsClient;
