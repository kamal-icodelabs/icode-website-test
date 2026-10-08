"use client";

import Link from "next/link";
import css from "./CaseStudyDetailNavigation.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import { useState, useEffect } from "react";
import classNames from "classnames";

const CaseStudyDetailNavigation = ({ data, themeColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(data[0]?.id);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Scroll spy — update activeId as sections enter the viewport
  useEffect(() => {
    if (!data?.length) return;

    const sectionIds = data.map((i) => i.id);

    const observers = [];

    // Track which sections are currently visible and pick the topmost one
    const visibleSections = new Set();

    const updateActive = () => {
      // Find the section closest to the top of the viewport
      let topmost = null;
      let topmostTop = Infinity;

      for (const id of visibleSections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < topmostTop) {
            topmostTop = rect.top;
            topmost = id;
          }
        }
      }

      if (topmost) setActiveId(topmost);
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.add(id);
          } else {
            visibleSections.delete(id);
          }
          updateActive();
        },
        {
          // Trigger when section crosses the upper 20% of the viewport
          rootMargin: "0px 0px -80% 0px",
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [data]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${css.case_nav_container}`)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, css.case_nav_container]);

  return (
    <>
      <div className={css.case_nav_container}>
        <Link href="/casestudy" className={css.gobackLink}>
          <IconCollection name="GoBack" /> Back
        </Link>

        {/* Desktop Navigation */}
        <div className={css.case_nav_wrapper}>
          {data.map((i, index) => (
            <Link
              key={index}
              href={`#${i.id}`}
              className={classNames(
                css.case_nav_link,
                activeId === i?.id ? css.active : null,
              )}
              style={{ color: activeId === i?.id ? "#0075f2" : null }}
            >
              {i?.label}
            </Link>
          ))}
        </div>

        <div />

        {/* Mobile/Tablet Menu Button */}
        <button
          className={`${css.menuButton} ${menuOpen ? css.menuOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className={css.hamburger}>
            <span />
            <span />
            <span />
          </div>
          <span className={css.menuLabel}>Overview</span>
          <IconCollection name="headerDropdownDown" />
        </button>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <div
        className={`${css.mobileDropdown} ${menuOpen ? css.dropdownOpen : ""}`}
      >
        <div className={css.dropdownContent}>
          {data.map((i, index) => (
            <Link
              key={index}
              href={`#${i.id}`}
              className={css.dropdownLink}
              onClick={closeMenu}
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && <div className={css.overlay} onClick={closeMenu} />}
    </>
  );
};

export default CaseStudyDetailNavigation;
