import { Card } from "./Card";
import { Tag } from "./Tag";
import React from "react";

export const SkillsetCard = () => (
    <Card className="print:fixed print:top-1/3 print:w-5/12">
        <h2 className="text-bold mb-2 text-4xl text-black print:text-3xl">Skillset</h2>
        <div className="flex flex-wrap justify-around">
            <Tag>HTML5</Tag>
            <Tag>CSS3</Tag>
            <Tag>JavaScript</Tag>
            <Tag>TypeScript</Tag>
            <Tag>React</Tag>
            <Tag>React Native</Tag>
            <Tag>Node.js</Tag>
            <Tag>SQL</Tag>
            <Tag>AWS</Tag>
            <Tag>GCP</Tag>
            <Tag>Serverless</Tag>
            <Tag>Terraform</Tag>
            <Tag>Docker</Tag>
            <Tag>Python</Tag>
            <Tag>PHP</Tag>
            <Tag>GraphQL</Tag>
        </div>
        <h2 className="text-bold mt-5 mb-2 text-4xl text-black">In progress</h2>
        <div className="flex flex-wrap justify-around">
            <Tag>Angular</Tag>
            <Tag>Flutter</Tag>
            <Tag>Rust</Tag>
            <Tag>Go</Tag>
            <Tag>Kubernetes</Tag>
            <Tag>Azure</Tag>
            <Tag>??? 🙂</Tag>
        </div>
    </Card>
);
