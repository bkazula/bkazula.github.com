import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Card } from "./Card";
import React from "react";

export const AboutCard = () => (
    <Card className="print:fixed print:w-5/12">
        <h1 className="text-4xl font-bold text-black print:text-3xl">Bartosz Kazuła</h1>
        <ul className="text-md my-2 text-black">
            <li>Web Developer</li>
            <li>Mobile Developer</li>
            <li>Cloud Architect</li>
            <li>DevOps</li>
            <li>Team Lead</li>
        </ul>
        <ul id="social" className="grid grid-cols-2 grid-rows-1 items-center justify-around print:grid-rows-2">
            <li className="mb-2 hidden text-center print:block print:text-lg">
                <a
                    href="tel:+48&#53;&#51;&#54;&#50;&#55;&#53;&#50;&#57;&#50;"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="flex flex-col items-center"
                >
                    <FontAwesomeIcon icon={faPhone} className="block" />
                    <span className="mt-1 block text-sm text-black">
                        +48&nbsp;&#53;&#51;&#54;&nbsp;&#50;&#55;&#53;&nbsp;&#50;&#57;&#50;
                    </span>
                </a>
            </li>
            <li className="mb-2 hidden flex-col items-center text-center print:flex print:text-lg">
                <FontAwesomeIcon icon={faLocationDot} className="block" />
                <span className="mt-1 block text-sm text-black">Łódź,&nbsp;Poland</span>
            </li>
            <li className="basis-1/2 text-center text-5xl print:basis-1/3  print:text-lg">
                <a
                    href="https://github.com/bkazula"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="flex flex-col items-center"
                >
                    <FontAwesomeIcon icon={faGithub} className="block" />
                    <span className="mt-1 block text-sm text-black">bkazula</span>
                </a>
            </li>
            <li className="basis-1/2 text-center text-5xl print:basis-1/3 print:text-lg">
                <a href="mailto:bartosz@kazula.eu" className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faAt} className="block" />
                    <span className="mt-1 block text-sm text-black">bartosz@kazula.eu</span>
                </a>
            </li>
        </ul>
    </Card>
);
