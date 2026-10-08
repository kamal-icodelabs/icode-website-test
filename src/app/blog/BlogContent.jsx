"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import css from "./Blog.module.css";
import Image from "next/image";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import Link from "next/link";
import { format } from "date-fns";
import debounce from "lodash/debounce";
import { blogDetail } from "@/services/service";

// Returns the best available Strapi format; falls back to the original image attrs.
function pickStrapiFormat(imageAttrs, preference) {
  if (!imageAttrs) return null;
  const f = imageAttrs.formats;
  for (const key of preference) {
    if (f?.[key]?.url) return f[key];
  }
  return { url: imageAttrs.url, width: imageAttrs.width, height: imageAttrs.height };
}

const ITEMS_PER_PAGE = 9;
const WORDS_PER_MINUTE = 200;

const getReadTime = (content) => {
  if (!content) return 1;
  const words = String(content).trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};

const stripMarkdown = (text) => {
  if (!text) return "";
  return text
    .replace(/^#{1,6}\s*.+$/gm, "")
    .replace(/\*{1,3}([^*]+)\*{1,3}/g, "$1")
    .replace(/_{1,3}([^_]+)_{1,3}/g, "$1")
    .replace(/`{1,3}[^`]*`{1,3}/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/[-*_]{3,}/g, "")
    .replace(/\n+/g, " ")
    .trim();
};

const ErrorBoundary = ({ children, error }) => {
  if (error) return <ContentWidth><p className={css.errorMessage}>{error}</p></ContentWidth>;
  return children;
};

export default function BlogContent({ initialData = [] }) {
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState(initialData);
  const [errorLoad, setErrorLoad] = useState("");
  const [isLoading, setIsLoading] = useState(initialData.length === 0);

  useEffect(() => {
    if (initialData.length > 0) return;

    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await blogDetail();
        setData(res?.data?.data || []);
      } catch (err) {
        setErrorLoad("Failed to fetch blog data.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const debouncedTabHandle = useCallback(
    debounce((type) => {
      setSelectedType(type);
      setCurrentPage(1);
    }, 300),
    []
  );

  const topBlog = useMemo(() => {
     console.log("Fetched blog data:", data);
    return selectedType === "All"
      ? data.find((item) => item.attributes.Promotext === "All")
      : data.find(
        (item) =>
          item.attributes.Type === selectedType &&
          item.attributes.Promotext === "Featured"
      );
  }, [data, selectedType]);

  const filteredItems = useMemo(() => {
    return data.filter(
      (item) =>
        (selectedType === "All" || item.attributes.Type === selectedType) &&
        item.id !== topBlog?.id &&
        (selectedType === "All" || item.attributes.Promotext !== "Featured")
    );
  }, [data, selectedType, topBlog]);

  const currentItems = useMemo(() => {
    return filteredItems
      .slice()
      .sort((a, b) => new Date(b.attributes.publishedAt || b.attributes.createdAt) - new Date(a.attributes.publishedAt || a.attributes.createdAt))
      .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handlePageChange = useCallback((page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

  const getPageNumbers = useCallback((current, total) => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, "...", total];
    if (current >= total - 2) return [1, "...", total - 2, total - 1, total];
    return [1, "...", current, "...", total];
  }, []);


  const uniqueItems = useMemo(() => {
    const types = new Set(["All"]);
    const result = [{ id: 0, attributes: { Type: "All" } }];
    data.forEach((item) => {
      const type = item.attributes.Type;
      if (!types.has(type)) {
        types.add(type);
        result.push(item);
      }
    });
    return result;
  }, [data]);

  return (
    <ErrorBoundary error={errorLoad}>
      <div>
        <div className={css.blogMainWrapper}>
          <div className={css.glowbgLeft}><IconCollection name="glowbgLeft" /></div>
          <div className={css.glowbgRight}><IconCollection name="glowbgRight" /></div>

          <ContentWidth>
            <div className={css.blogContainer}>
              <p className={css.blogSubHeading}>BLOG</p>
              <h1 className={css.blogHeading}>
                iCodelabs Blog —{" "}
                <span>Marketplace, Web, Mobile &amp; AI Insights</span>
              </h1>
              <p className={css.blogTitle}>Latest blog by categories</p>

              <div className={css.blogButtonWrapper} role="tablist">
                {uniqueItems.map((item) => (
                  <button
                    key={item.attributes.Type}
                    onClick={() => debouncedTabHandle(item.attributes.Type)}
                    className={`${css.blogButton} ${selectedType === item.attributes.Type ? css.blogButtonActive : ""}`}
                    role="tab"
                    aria-selected={selectedType === item.attributes.Type}
                  >
                    {item.attributes.Type}
                  </button>
                ))}
              </div>
            </div>
          </ContentWidth>
        </div>

        {/* Featured Blog */}
        {topBlog && (
          <ContentWidth>
            <div className={css.blogFeaturedWrapper}>
              <div className={css.blogLeftFeatured}>
                <button className={css.featuredButton}>Featured</button>
                <Link href={`/blog/${topBlog.attributes.Slug}`} aria-label={`Read featured article: ${topBlog.attributes.Title}`}>
                  <h2 className={css.featuredHeading}>{topBlog.attributes.Title}</h2>
                  <p className={css.featuredDescription}>{topBlog?.attributes?.Content ? stripMarkdown(topBlog.attributes.Content).slice(0, 180) + '...' : ''} </p>
                  <div className={css.featuredDate}>
                    <time dateTime={topBlog.attributes.publishedAt || topBlog.attributes.createdAt}>
                      {format(new Date(topBlog.attributes.publishedAt || topBlog.attributes.createdAt), "dd MMMM yyyy")}
                    </time>
                    <p className={css.featureDateTime}>
                      <IconCollection name="audioBalanceIcon" />
                      <span>{getReadTime(topBlog.attributes.Content)} min read</span>
                    </p>
                  </div>
                </Link>
              </div>
              {topBlog.attributes?.Image?.data?.[0]?.attributes && (() => {
                const fmt = pickStrapiFormat(topBlog.attributes.Image.data[0].attributes, ['large', 'medium', 'small']);
                return fmt && (
                  <div className={css.blogRightFeatured}>
                    <Link href={`/blog/${topBlog.attributes.Slug}`} aria-label={`Open featured article image: ${topBlog.attributes.Title}`}>
                      <Image
                        src={fmt.url}
                        alt={topBlog.attributes.Title || "Featured blog image"}
                        width={fmt.width}
                        height={fmt.height}
                        priority
                        unoptimized
                      />
                    </Link>
                  </div>
                );
              })()}
            </div>
          </ContentWidth>
        )}

        {/* Blog Cards */}
        <ContentWidth>
          <div className={css.featureBorder}></div>
          {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px', width: '100%' }}>
              <div className="loader"></div>
            </div>
          ) : currentItems.length === 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', width: '100%' }}>
              <p>No articles found for this category yet. Check back soon.</p>
            </div>
          ) : (
            <div className={css.featureCardWrapper}>
              {currentItems.map((card) => {
                const cardImgFmt = pickStrapiFormat(card.attributes?.Image?.data?.[0]?.attributes, ['small', 'medium']);
                return (
                  <Link key={card.id} href={`/blog/${card.attributes.Slug}`} className="textBtn" aria-label={`Read more: ${card.attributes.Title}`}>
                    <div className={css.featureCardContent}>
                      {cardImgFmt && (
                        <Image
                          src={cardImgFmt.url}
                          width={cardImgFmt.width}
                          height={cardImgFmt.height}
                          alt={card.attributes.Title || "Blog image"}
                          loading="lazy"
                          unoptimized
                        />
                      )}
                      <div className={css.featureData}>
                        <span className={css.featureTime}>{format(new Date(card.attributes.publishedAt || card.attributes.createdAt), "MMM dd, yyyy")}</span>

                        <h3 className={css.featureCardDescription}>{card.attributes.Title}</h3>
                        <span className={css.featuredType}>{card.attributes.Type}</span>

                        <span className={css.readMoreButton}>Read more <IconCollection name="arrowUpBlue" /> </span>

                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </ContentWidth>

        {/* Pagination */}
        {totalPages > 1 && (
          <ContentWidth>
            <div className={css.buttonWrapper} role="navigation" aria-label="Pagination">

              {
                currentPage <= 1 ? null : (
                  <button
                    className={css.prevButton}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    <IconCollection name="LeftGrayArrow" />
                  </button>)
              }


              {getPageNumbers(currentPage, totalPages).map((number, i) => (
                <button
                  key={i}
                  className={`${css.pageButton} ${number === currentPage ? css.activePage : ""}`}
                  onClick={() => typeof number === "number" && handlePageChange(number)}
                  disabled={number === "..."}
                  aria-current={number === currentPage ? "page" : undefined}
                >
                  {number}
                </button>
              ))}

              {currentPage >= totalPages ? null : (
                <button
                  className={css.nextButton}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  <IconCollection name="rightGrayArrow" />
                </button>
              )}
            </div>
          </ContentWidth>
        )}

        {/* CTA Section */}
        <ContentWidth>
          <div className={css.infoCardContainer}>
            <div className={css.contentContainer}>
              <h2>Send Your Proposal Now And Get Free Analysis & Estimation!</h2>
              <p>Kickstart your project with a free, no-obligation analysis and cost estimate today!</p>
              <Link className="primaryBtnWhite" href="/contact">
                Contact Us <IconCollection name="rightArrowTopDark" />
              </Link>
            </div>
            <div>
              <Image
                width={614}
                height={260}
                className={css.worldImg}
                src="/assests/img/dottedWorld.png"
                alt="World map illustration"
                loading="lazy"
              />
              <Image
                width={361}
                height={236}
                className={css.womanWorkingImg}
                src="/assests/img/womanWorkingImg.png"
                alt="Illustration of woman working on a screen"
                loading="lazy"
              />
            </div>
          </div>
        </ContentWidth>
      </div>
    </ErrorBoundary>
  );
}
