"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Link from "next/link";

const Timeline = () => {
  return (
    <VerticalTimeline layout="1-column-left" lineColor="#02362D">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#02362D", color: "white" }}
        date="July 2023 - March 2025"
        iconStyle={{
          background: "#ff4d00",
          color: "#ff4d00",
          boxShadow: "0 4px 8px rgba(2, 54, 45, 0.9)",
          border: "1px solid #02362D",
        }}
      >
        <Heading variantColor="white" as="h2" size="xs">
          Digiteer Software Studio
        </Heading>
        <Heading variantColor="white" as="h3" size="sm" className="mb-6">
          Junior Systems Engineer
        </Heading>
        <ul className="list-inside list-disc">
          <li className="mb-4">
            <Text as="strong" variantColor="primary">
              Mentored 3 interns and 1 Junior Developer
            </Text>
            , accelerating onboarding and improving team workflow.
          </li>
          <li className="mb-4">
            <Text as="strong" variantColor="primary">
              Delivered performant UIs
            </Text>{" "}
            that consistently scored{" "}
            <Text as="strong" variantColor="primary">
              90+ in Lighthouse audits
            </Text>{" "}
            by applying{" "}
            <Text as="strong" variantColor="primary">
              SSR
            </Text>
            ,{" "}
            <Text as="strong" variantColor="primary">
              lazy loading
            </Text>
            ,{" "}
            <Text as="strong" variantColor="primary">
              code splitting
            </Text>
            , and{" "}
            <Text as="strong" variantColor="primary">
              image optimizations
            </Text>
            .
          </li>
          <li className="mb-4">
            Built and contributed to{" "}
            <Text as="strong" variantColor="primary">
              30+ projects
            </Text>
            , including responsive landing pages, admin dashboards, and
            full-stack applications using{" "}
            <Text as="strong" variantColor="primary">
              Next.js
            </Text>
            ,{" "}
            <Text as="strong" variantColor="primary">
              Ruby on Rails
            </Text>
            , and{" "}
            <Text as="strong" variantColor="primary">
              PostgreSQL
            </Text>
          </li>
          <li className="mb-4">
            <Text as="strong" variantColor="primary">
              Resolved a critical deployment issue
            </Text>{" "}
            caused by{" "}
            <Text as="strong" variantColor="primary">
              Heroku slug size limits
            </Text>{" "}
            by optimizing static assets and precompiling Rails resources,
            enabling successful deployment.
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#02362D", color: "white" }}
        date="July 2023 - March 2025"
        iconStyle={{
          background: "#ff4d00",
          color: "#ff4d00",
          boxShadow: "0 4px 8px rgba(2, 54, 45, 0.9)",
          border: "1px solid #02362D",
        }}
      >
        <Heading variantColor="white" as="h2" size="xs">
          Zuitt Coding Bootcamp
        </Heading>
        <Heading variantColor="white" as="h3" size="sm">
          Web Developer Program (MERN Stack)
        </Heading>
        <Text variantColor="white">
          Completed a{" "}
          <Text as="strong" variantColor="primary">
            MERN
          </Text>{" "}
          stack bootcamp, building a fully functional eCommerce application
          using{" "}
          <Text as="strong" variantColor="primary">
            React
          </Text>
          ,{" "}
          <Text as="strong" variantColor="primary">
            Node.js
          </Text>
          ,{" "}
          <Text as="strong" variantColor="primary">
            Express
          </Text>
          , and{" "}
          <Text as="strong" variantColor="primary">
            MongoDB Atlas
          </Text>{" "}
          supporting user authentication via secure{" "}
          <Text as="strong" variantColor="primary">
            JWT
          </Text>{" "}
          and managing product and order data effectively. Designed and tested
          scalable{" "}
          <Text as="strong" variantColor="primary">
            REST APIs
          </Text>{" "}
          with{" "}
          <Text as="strong" variantColor="primary">
            Postman
          </Text>{" "}
          to ensure robustness and reliability. Deployed the app across multiple
          platforms (
          <Text as="strong" variantColor="primary">
            GitLab
          </Text>
          ,{" "}
          <Text as="strong" variantColor="primary">
            GitHub
          </Text>
          ,{" "}
          <Text as="strong" variantColor="primary">
            Render
          </Text>
          ,{" "}
          <Text as="strong" variantColor="primary">
            Vercel
          </Text>
          ), mastering end-to-end development and version control. This
          immersive experience sharpened my ability to deliver maintainable,
          production-ready code in fast-paced, real-world environments.
        </Text>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#02362D", color: "white" }}
        date="2020 - 2023"
        iconStyle={{
          background: "#ff4d00",
          color: "#ff4d00",
          boxShadow: "0 4px 8px rgba(2, 54, 45, 0.9)",
          border: "1px solid #02362D",
        }}
      >
        <Heading variantColor="white" as="h2" size="xs">
          Career Transition
        </Heading>
        <Heading variantColor="white" as="h3" size="sm">
          Self Study Web Development
        </Heading>
        <Text variantColor="white">
          While pursuing my career in mechanical engineering, I consistently
          dedicated{" "}
          <Text as="strong" variantColor="primary">
            10 hours per week
          </Text>{" "}
          to self-learning web development. I completed{" "}
          <Link
            href="https://www.theodinproject.com"
            target="_blank"
            className="underline"
          >
            The Odin Project
          </Link>{" "}
          curriculum and several advanced courses on{" "}
          <Link
            href="https://frontendmasters.com"
            target="_blank"
            className="underline"
          >
            Frontend Masters
          </Link>
          , building over{" "}
          <Text as="strong" variantColor="primary">
            10+ mini projects
          </Text>{" "}
          along the way. Through this, I gained a strong foundation in{" "}
          <Text as="strong" variantColor="primary">
            HTML
          </Text>
          ,{" "}
          <Text as="strong" variantColor="primary">
            CSS
          </Text>
          , and{" "}
          <Text as="strong" variantColor="primary">
            Javascript
          </Text>
          , and developed practical skills in responsive design and interactive
          UI development. This consistent, self-driven effort laid the
          groundwork for my transition into tech.
        </Text>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
