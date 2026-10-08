"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.css";
import IconCollection from "../IconCollection/IconCollection";
import ContentWidth from "../ContentWidth/ContentWidth";
import { usePathname } from "next/navigation";
import { navItems } from "../helperData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathName = usePathname();
  const isCaseStudy = pathName.includes("/casestudy");

  const headerRef = useRef(null);
  const hoverTimeout = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const openDropdown = (label) => setActiveDropdown(label);
  const cancelHoverClose = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  };
  const scheduleHoverClose = () => {
    cancelHoverClose();
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 300);
  };

  const handleDropdown = (label) => {
    if (isMobile) {
      setActiveDropdown((prev) => (prev === label ? null : label));
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        !event.target.closest("a, button")
      ) {
        setActiveDropdown(null);
      }
    };

    const checkMobile = () => setIsMobile(window.innerWidth < 992);

    checkMobile();
    setScrolled(window.scrollY > 60);
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🔑 Close menu & dropdown whenever route changes
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathName]);

  const renderSubItems = (subItems, isMobileMenu = false, parentLabel = "") => (
    <div
      onMouseEnter={() => {
        if (!isMobileMenu) {
          cancelHoverClose();
          openDropdown(parentLabel);
        }
      }}
      onMouseLeave={() => {
        if (!isMobileMenu) {
          scheduleHoverClose();
        }
      }}
    >
      <ContentWidth
        className={`${isMobileMenu ? css.mobileMenuWrapper : css.desktopMenuWrapper} 
          ${activeDropdown === parentLabel ? css.show : ""} 
          ${parentLabel === "Services" ? css.fullWidthDropdown : ""}`}
      >
        <div
          className={
            isMobileMenu ? css.mobileDropdownMenu : css.desktopDropdownMenu
          }
        >
          <div className={css.contentWrapper}>
            {!isMobileMenu && (
              <div className={css.CTACard}>
                <h4>
                  {parentLabel === "Marketplace"
                    ? (
                      <>
                        50+ Marketplaces Delivered <br />
                      </>
                    )
                    : "Marketplace & AI Development"}
                </h4>
                <p>
                  {parentLabel === "Marketplace"
                    ? (
                      <>
                        Rental, service, product, and booking — built on Sharetribe
                        or fully custom. 50+ live builds across 20+ countries. <br />
                      </>
                    )
                    : "Sharetribe development, custom marketplaces, AI features,          and mobile apps — all delivered faster with AI."}

                </p>
              </div>
            )}

            <ul>
              {subItems.map((item, index) => {
                const isActive = pathName === `/${item.slug}`;

                return (
                  <li key={index}>
                    <Link
                      href={`/${item.slug}`}
                      prefetch={false}
                      className={`${isActive ? css.activeState : ""} ${css.itemContainer}`}
                      onClick={() => {
                        setActiveDropdown(null);
                        setMenuOpen(false);
                      }}
                    >
                      <div className={css.labelNicon}>
                        {item.logo && <IconCollection name={item.logo} />}
                        <span className="subTitle">{item.title}</span>
                      </div>
                      <p>{item.para}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ContentWidth>
    </div>
  );

  return (
    <header ref={headerRef}>
      <div className={`${css.headerWrapper} ${scrolled || isCaseStudy ? css.scrolled : ""}`}>
        <ContentWidth>
          <div className={css.contentContainer}>
            <Link href="/" className={css.logoDiv} onClick={() => setMenuOpen(false)}>
              <IconCollection name="headerLogo" />
            </Link>

            <nav className={`${css.navMenu} ${menuOpen ? css.open : ""}`}>
              <ul className={css.navList}>
                {navItems.map((i, index) => {
                  const isActive = pathName.startsWith(`/${i.slug}`);
                  const hasSub = Boolean(i.subItems);

                  return (
                    <li
                      key={index}
                      className={`${css.navItem} ${isActive ? css.activeMenu : ""}`}
                      onMouseEnter={() => {
                        if (!isMobile && hasSub) {
                          cancelHoverClose();
                          openDropdown(i.label);
                        }
                      }}
                      onMouseLeave={() => {
                        if (!isMobile && hasSub) {
                          scheduleHoverClose();
                        }
                      }}
                      onClick={() => handleDropdown(i.label)}
                    >
                      {hasSub ? (
                        <div
                          className={`${css.navLinkDropDown} ${activeDropdown === i.label
                            ? css.activeDropdownMobile
                            : ""
                            }`}
                        >
                          {i.label}
                          <IconCollection
                            name={
                              activeDropdown === i.label
                                ? "headerDropdownDown"
                                : "headerDropdownUp"
                            }
                          />
                        </div>
                      ) : (
                        <Link
                          href={`/${i.slug}`}
                          className={css.navLink}
                          onClick={() => setMenuOpen(false)} // 🔑 close after navigation
                        >
                          {i.label}
                        </Link>
                      )}

                      {hasSub &&
                        isMobile &&
                        renderSubItems(i.subItems, true, i.label)}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <a href="/contact" onClick={() => setMenuOpen(false)}>
              <button className={`primaryBtn ${css.hireDevBtn}`}>
                Start a Project
                <IconCollection name="rightArrowTop" />
              </button>
            </a>

            <div className={css.navToggle} onClick={toggleMenu}>
              <IconCollection name={menuOpen ? "closeNav" : "openNav"} />
            </div>
          </div>
        </ContentWidth>
      </div>

      {!isMobile &&
        navItems
          .filter((item) => item.subItems)
          .map((item, index) => (
            <React.Fragment key={index}>
              {renderSubItems(item.subItems, false, item.label)}
            </React.Fragment>
          ))}
    </header>
  );
}

export default Header;