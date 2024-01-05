import * as React from "react";
import { Card } from "../components/Card";
import { graphql } from "gatsby";
import { JobRow } from "../components/JobRow";
import { AboutCard } from "../components/AboutCard";
import { SkillsetCard } from "../components/SkillsetCard";

const IndexPage = ({ data }) => {
    return (
        <>
            <main className="flex justify-around p-5 print:p-0 xl:container xl:mx-auto">
                <aside className="basis-4/12 print:basis-5/12">
                    <AboutCard />
                    <SkillsetCard technologies={data.allSanityTechnology.nodes} />
                </aside>
                <article className="basis-7/12 print:grow">
                    <Card big>
                        <h2 className="text-bold mb-2 text-4xl text-black print:text-3xl">Experience</h2>
                        <section>
                            {data.allSanityJob.nodes.map((node) => {
                                return <JobRow job={node} key={node.id} />;
                            })}
                        </section>
                    </Card>
                </article>
            </main>
            <footer className="clear-both mt-72 hidden print:block">
                <p className="text-xs">
                    I agree to the processing of personal data provided in this document for realising the recruitment
                    process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item
                    1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council
                    of 27 April 2016 on the protection of natural persons with regard to the processing of personal data
                    and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection
                    Regulation).
                </p>
            </footer>
        </>
    );
};

export default IndexPage;

export const Head = () => <title>Bartosz Kazuła Homepage</title>;

export const query = graphql`
    query {
        allSanityJob(sort: [{ startDate: DESC }, { endDate: DESC }]) {
            totalCount
            nodes {
                id
                company
                description
                position
                startDate
                endDate
                technologies {
                    name
                }
            }
        }
        allSanityTechnology(filter: { isPublishedInSummary: { eq: true } }, sort: [{ name: ASC }]) {
            totalCount
            nodes {
                id
                name
                isKnown
            }
        }
    }
`;
