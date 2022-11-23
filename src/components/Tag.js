import React from "react";

export const Tag = ({ children, big = false }) => {
    return (
        <div
            className={`leading-sm mb-1 mr-1 inline-flex items-center rounded-full bg-white px-3 py-1 ${
                big ? "text-md" : "text-xs"
            } font-bold uppercase text-gray-700 print:text-xs`}
        >
            {children}
        </div>
    );
};
