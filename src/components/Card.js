import React from "react";

export const Card = ({ children, big = false, className = "" }) => {
    return (
        <div
            className={`mb-5 flex flex-col items-center justify-between rounded-md ${
                big ? "bg-slate-50" : "bg-slate-200"
            } p-3 drop-shadow-md ${className}`}
        >
            {children}
        </div>
    );
};
