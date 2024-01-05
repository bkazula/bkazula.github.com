import React from "react";
import { graphql, Link } from "gatsby";
import { Card } from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Tag } from "../../components/Tag";

export default function ExperiencePage({ data: { sanityJob: data }, ...rest }) {
    return (
        <main className="container mx-auto pt-5">
            <Card big>
                <div className="flex w-full">
                    <Link to="/">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                    <h1 className="flex-grow text-center text-xl font-bold text-black">
                        {data.position} @ {data.company}
                    </h1>
                </div>
                <p className="mt-5">{data.description}</p>
                <div className="mt-5 w-full">
                    <h2 className="text-lg font-bold text-black">Used tech stack</h2>
                    {data.technologies.map(({ name }) => (
                        <Tag key={name} big>
                            {name}
                        </Tag>
                    ))}
                </div>
            </Card>
        </main>
    );
}

export const Head = () => <title>Bartosz Kazuła Homepage</title>;

export const data = graphql`
    query ($id: String!) {
        sanityJob(id: { eq: $id }) {
            company
            startDate
            endDate
            position
            description
            technologies {
                name
            }
        }
    }
`;
