import React from "react";
import Link from "next/link";

/* Primary Button */
export const PrimaryBtn = ({
    children,
    className = "",
    padding,
    style = {},
    ...props
}) => {
    return (
        <button
            className={`defaultGradientBtn ${className}`}
            style={{
                padding: padding || "10px 25px",
                ...style,
            }}
            {...props}
        >
            {children}
        </button>
    );
};


/* Primary Link Button */
export const PrimaryBtnLink = ({
    children,
    href = "#",
    className = "",
    padding,
    style = {},
    prefetch = false,
    ...props
}) => {
    return (
        <Link
            href={href}
            prefetch={prefetch}
            className={`defaultGradientBtn ${className}`}
            style={{
                padding: padding || "14px 30px",
                display: "inline-flex",
                ...style,
            }}
            {...props}
        >
            {children}
        </Link>
    );
};