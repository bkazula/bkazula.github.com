import * as React from "react";
import { Card } from "../components/Card";
import { graphql } from "gatsby";
import { ExperienceRow } from "../components/ExperienceRow";
import { AboutCard } from "../components/AboutCard";
import { SkillsetCard } from "../components/SkillsetCard";

const IndexPage = ({ data }) => {
    return (
        <main className="flex justify-around p-5 print:justify-start print:p-0 xl:container xl:mx-auto">
            <aside className="basis-4/12 print:mr-2 print:basis-5/12">
                <AboutCard />
                <SkillsetCard />
            </aside>
            <article className="basis-7/12">
                <Card big>
                    <h2 className="text-bold mb-2 text-4xl text-black print:text-3xl">Experience</h2>
                    <section>
                        {data.allExperienceJson.edges.map(({ node }) => {
                            return <ExperienceRow experience={node} />;
                        })}
                    </section>
                </Card>
            </article>
        </main>
    );
};

export default IndexPage;

export const Head = () => <title>Bartosz Kazuła Homepage</title>;

export const query = graphql`
    query {
        allExperienceJson {
            edges {
                node {
                    id
                    start
                    end
                    company
                    position
                    summary
                    stack
                }
            }
        }
    }
`;
