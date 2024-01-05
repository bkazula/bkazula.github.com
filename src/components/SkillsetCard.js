import { Card } from "./Card";
import { Tag } from "./Tag";
import React from "react";

export const SkillsetCard = ({ technologies }) => {
    const knownTechnologies = React.useMemo(() => technologies.filter((tech) => tech.isKnown), [technologies]);
    const unknownTechnologies = React.useMemo(() => technologies.filter((tech) => !tech.isKnown), [technologies]);
    return (
        <Card className="print:fixed print:top-1/3 print:w-5/12">
            <h2 className="text-bold mb-2 text-4xl text-black print:text-3xl">Skillset</h2>
            <div className="flex flex-wrap justify-around">
                {knownTechnologies.map(({ name }) => (
                    <Tag key={name}>{name}</Tag>
                ))}
            </div>
            <h2 className="text-bold mt-5 mb-2 text-4xl text-black print:text-3xl">In progress</h2>
            <div className="flex flex-wrap justify-around">
                {unknownTechnologies.map(({ name }) => (
                    <Tag key={name}>{name}</Tag>
                ))}
                <Tag>??? 🙂</Tag>
            </div>
            <h2 className="text-bold mt-5 mb-2 text-4xl text-black print:text-3xl">Languages</h2>
            <ul className="w-11/12 list-disc print:text-sm">
                <li>Polish - native</li>
                <li>English - communicative</li>
            </ul>
        </Card>
    );
};
