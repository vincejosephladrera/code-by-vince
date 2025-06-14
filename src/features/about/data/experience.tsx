import Link from "next/link";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string | React.ReactNode;
};

const DescriptionOne = () => {
  return (
    <>
      <ul className="grid list-inside list-disc gap-3">
        <li>
          Delivered performant UIs that consistently scored{" "}
          <span className="text-primary font-bold">
            90+ in Lighthouse audits
          </span>{" "}
          by{" "}
          <span className="text-primary font-bold">
            applying SSR, lazy loading, code splitting, and image optimizations
          </span>
          .
        </li>
        <li>
          Built and contributed to{" "}
          <span className="text-primary font-bold">30+ projects</span>,
          including responsive landing pages, admin dashboards, and full-stack
          applications using Next.js, Ruby on Rails, and PostgreSQL
        </li>
        <li>
          Mentored{" "}
          <span className="text-primary font-bold">
            3 interns and 1 junior developer
          </span>{" "}
          accelerating onboarding and improving team workflow.
        </li>
      </ul>
    </>
  );
};

const DescriptionTwo = () => {
  return (
    <p>
      Completed a <span className="text-primary font-bold">MERN</span> stack
      bootcamp, building a fully functional eCommerce application using{" "}
      <span className="text-primary font-bold">
        React, Node.js, Express, and MongoDB Atlas
      </span>{" "}
      supporting user authentication via secure{" "}
      <span className="text-primary font-bold">JWT</span> and managing product
      and order data effectively. Designed and tested scalable{" "}
      <span className="text-primary font-bold">REST APIs</span> with Postman to
      ensure robustness and reliability. Deployed the app across multiple
      platforms{" "}
      <span className="text-primary font-bold">
        (GitLab, GitHub, Render, Vercel)
      </span>
      , experiencing end-to-end development and version control.
    </p>
  );
};

const DescriptionThree = () => {
  return (
    <p>
      While pursuing my career in mechanical engineering, I consistently
      dedicated{" "}
      <span className="text-primary font-bold">10 hours per week</span> to
      self-learning web development. I completed{" "}
      <Link
        className="font-medium underline"
        href="https://www.theodinproject.com/"
        target="_blank"
      >
        The Odin Project
      </Link>{" "}
      curriculum and several advanced courses on{" "}
      <Link
        className="font-medium underline"
        href="https://frontendmasters.com/learn/?q="
        target="_blank"
      >
        Frontend Masters
      </Link>
      , building over <span className="text-primary font-bold">10+</span> mini
      projects along the way. Through this, I gained a strong foundation in{" "}
      <span className="text-primary font-bold">HTML, CSS, and Javascript</span>,
      and developed practical skills in responsive design and interactive UI
      development. This consistent, self-driven effort laid the groundwork for
      my transition into tech.
    </p>
  );
};

const experience: Experience[] = [
  {
    title: "Junior Systems Engineer",
    company: "Digiteer Software Studio",
    period: "July 2023 - March 2025",
    description: <DescriptionOne />,
  },
  {
    title: "Web Development Bootcamp Participant – MERN Stack",
    company: "Zuitt Coding Bootcamp",
    period: "April 2023 - July 2023",
    description: <DescriptionTwo />,
  },
  {
    title: "Mechanical Engineer – Career Transition to Web Development",
    company: "",
    period: "2021 - 2023",
    description: <DescriptionThree />,
  },
];

export type { Experience };
export { experience };
