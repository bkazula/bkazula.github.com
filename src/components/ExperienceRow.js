import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { Tag } from "./Tag";

function getYear(date) {
    return new Date(date).getFullYear();
}

export const ExperienceRow = ({ experience }) => (
    <div className="mb-4 grid grid-cols-12 grid-rows-1 pt-1 print:[&:nth-child(3)]:break-after-page print:[&:nth-child(4)]:-mt-10">
        <Link to={`/job/${experience.id}`} className="text-md col-span-3 block text-slate-500 print:text-xs">
            {experience.company}
            <br />
            <span className="inline-flex items-center justify-center text-slate-500">
                <FontAwesomeIcon icon={faCalendar} className="mr-1 block" />
                <span className="block">
                    {getYear(experience.startDate)} - {experience.endDate ? getYear(experience.endDate) : "Present"}
                </span>
            </span>
        </Link>
        <Link to={`/job/${experience.id}`} className="col-span-9 block pl-1">
            <h3 className="text-lg font-bold print:text-sm">{experience.position}</h3>
            <p className="print:text-xs">{experience.description}</p>
            <div>
                {experience.technologies.map(({ name }) => {
                    return <Tag key={name}>{name}</Tag>;
                })}
            </div>
        </Link>
    </div>
);
