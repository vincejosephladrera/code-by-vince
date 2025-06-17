import Section from "@/components/Section";
import Container from "@/components/Container";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navItems";

const Footer = () => {
  return (
    <>
      <Section variantColor="accent" as="footer">
        <Container className="text-white">
          <div className="grid-col grid gap-y-12 md:grid-cols-2 lg:flex lg:flex-nowrap lg:justify-between">
            <section
              className="md:col-span-2 lg:w-[30%]"
              aria-labelledby="footer-cta"
            >
              <h2 id="footer-cta" className="mb-6 text-4xl font-bold">
                Ready to Bring Your Ideas to Life?
              </h2>
              <p className="mb-10 text-neutral-100">
                Let&apos;s turn your vision into an engaging digital experience
                that delivers results.
              </p>
              <Link
                className={cn(
                  buttonVariants({
                    variant: "default",
                  }),
                  "lg:w-fit",
                )}
                href="mailto:ladreravincejoseph@gmail.com"
              >
                💬 Join Party
              </Link>
            </section>
            <nav aria-label="Footer navigation">
              <h2 className="mb-12 font-bold">Explore</h2>
              <ul className="grid grid-cols-2 flex-col gap-12 md:flex">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link className="footer-link" href="/about">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <address className="not-italic">
              <h2 className="mb-12 font-bold">Join Party</h2>
              <div className="grid flex-col items-start gap-12 sm:grid-cols-2 md:flex">
                <Link className="footer-link" href="tel:+639457012999">
                  09457012999
                </Link>
                <Link
                  className="footer-link"
                  href="mailto:ladreravincejoseph@gmail.com"
                >
                  ladreravincejoseph@gmail.com
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ladreravincejoseph"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </div>
            </address>
          </div>
          <hr className="my-10 lg:my-20" />
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <span className="mr-auto text-neutral-100">
              © 2025 Code by Vince. All Rights Reserved
            </span>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Footer;
