import Section from "@/components/Section";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import {
  CodeIcon,
  StackIcon,
  LightBulbIcon,
  BookIcon,
  CloudIcon,
  TargetIcon,
} from "@/components/Icon";
import ExpertiseCard from "./ExpertiseCard";
import Card from "@/components/Card";
import Image from "next/image";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const data = [
  {
    icon: CodeIcon,
    title: "Expert in Front-End Development",
    description:
      "Crafting responsive, intuitive, and user-focused interfaces with React and Next.js to create seamless digital experiences.",
  },
  {
    icon: StackIcon,
    title: "Full-Stack Potential",
    description:
      "Building robust back-end systems that complement my front-end expertise, ensuring a complete, well-rounded approach to development.",
  },
  {
    icon: LightBulbIcon,
    title: "Creative Problem Solver",
    description:
      "Transforming challenges into opportunities with innovative solutions that bring your vision to life and exceed expectations.",
  },
  {
    icon: BookIcon,
    title: "Passionate About Growth",
    description:
      "Continuously learning and staying ahead of the curve with the latest technologies, ensuring your project is always cutting-edge and effective.",
  },
  {
    icon: CloudIcon,
    title: "Collaborative Partner",
    description:
      "Transparent and proactive communication throughout the development process, ensuring you’re always in the loop and part of the journey.",
  },
  {
    icon: TargetIcon,
    title: "Commitment to Quality",
    description:
      "Dedicated to delivering polished, bug-free, and high-quality outcomes that align with your goals and drive success.",
  },
];

const Competencies = () => {
  return (
    <Section variantColor="primary">
      <Container className="text-center">
        <Text
          variantColor="white"
          leading="relaxed"
          size="md"
          className="font-bold"
        >
          Expertise
        </Text>
        <Heading as="h2" variantColor="white" className="mb-12">
          Why Choose Me as Your Developer
        </Heading>
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((data) => (
            <ExpertiseCard key={data.title} {...data} />
          ))}
        </div>
        <Card className="relative overflow-hidden bg-orange-50 py-6">
          <div className="sm:pr-[42%] sm:max-lg:text-left md:pr-[33%] lg:pr-[24px]">
            <h3 className="mb-3 text-2xl leading-snug font-extrabold">
              Ready to Bring Your Ideas to Life?
            </h3>
            <p className="text-text-body mb-4 leading-relaxed">
              Let’s turn your vision into an engaging digital experience that
              delivers results.
            </p>
            <Link
              href="mailto:ladreravincejoseph@gmail.com"
              className={cn(
                buttonVariants({
                  variantColor: "primary",
                  size: "normal",
                }),
                "mx-auto lg:w-fit",
              )}
            >
              Let&apos;s Build Together
            </Link>
          </div>
          <Image
            src="/images/core-competencies-left.svg"
            alt="decorative cartoon illustration"
            className="core-competency-section__left-thumb"
            width={305}
            height={136}
          />
          <Image
            src="/images/core-competencies-right.svg"
            alt="decorative cartoon illustration"
            className="core-competency-section__right-thumb"
            width={305}
            height={136}
          />
        </Card>
      </Container>
    </Section>
  );
};

export default Competencies;

// import ExpertiseCard from '@/components/expertise-card';
// import {
// 	CodeIcon,
// 	StackIcon,
// 	LightBulbIcon,
// 	BookIcon,
// 	CloudIcon,
// 	TargetIcon,
// } from '@/assets/icons/icons';

// import imgLeft from '@/assets/images/core-competencies-left.svg';
// import imgRight from '@/assets/images/core-competencies-right.svg';

// import { Card, CardContent } from '@/components/shadcn/card';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { buttonVariants } from '@/components/shadcn/button';

// import useMobile from '@/hooks/useMobile';

// const expertiseData = [
// 	{
// 		icon: CodeIcon,
// 		title: 'Expert in Front-End Development',
// 		description:
// 			'Crafting responsive, intuitive, and user-focused interfaces with React and Next.js to create seamless digital experiences.',
// 	},
// 	{
// 		icon: StackIcon,
// 		title: 'Full-Stack Potential',
// 		description:
// 			'Building robust back-end systems that complement my front-end expertise, ensuring a complete, well-rounded approach to development.',
// 	},
// 	{
// 		icon: LightBulbIcon,
// 		title: 'Creative Problem Solver',
// 		description:
// 			'Transforming challenges into opportunities with innovative solutions that bring your vision to life and exceed expectations.',
// 	},
// 	{
// 		icon: BookIcon,
// 		title: 'Passionate About Growth',
// 		description:
// 			'Continuously learning and staying ahead of the curve with the latest technologies, ensuring your project is always cutting-edge and effective.',
// 	},
// 	{
// 		icon: CloudIcon,
// 		title: 'Collaborative Partner',
// 		description:
// 			'Transparent and proactive communication throughout the development process, ensuring you’re always in the loop and part of the journey.',
// 	},
// 	{
// 		icon: TargetIcon,
// 		title: 'Commitment to Quality',
// 		description:
// 			'Dedicated to delivering polished, bug-free, and high-quality outcomes that align with your goals and drive success.',
// 	},
// ];

// export default function CoreCompetencies() {
// 	const { isMobile } = useMobile(640);

// 	return (
// 		<section className='bg-primary py-10 sm:py-20'>
// 			<div className='container--default text-center text-white'>
// 				<p className='home__subheading--white mb-3'>Core Competencies</p>
// 				<h2 className='home__heading--white mb-12'>Why Choose Me as Your Developer</h2>
// 				{isMobile ? (
// 					<Swiper spaceBetween={24} slidesPerView={1.4} className='mb-12'>
// 						{expertiseData.map(({ title, description, icon }) => {
// 							return (
// 								<SwiperSlide>
// 									<ExpertiseCard icon={icon()} title={title} description={description} />
// 								</SwiperSlide>
// 							);
// 						})}
// 					</Swiper>
// 				) : (
// 					<div className='grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
// 						{expertiseData.map(({ title, description, icon }) => {
// 							return <ExpertiseCard icon={icon()} title={title} description={description} />;
// 						})}
// 					</div>
// 				)}
// 				<Card className='bg-orange-50 py-6 overflow-hidden relative'>
// 					<img
// 						alt='decorative-cartoon-illustration'
// 						src={imgLeft}
// 						className='core-competency-section__left-thumb'
// 					/>
// 					<CardContent className='sm:max-lg:text-left sm:pr-[42%] md:pr-[33%] lg:pr-[24px]'>
// 						<h3 className='mb-3 font-extrabold leading-snug text-2xl'>
// 							Ready to Bring Your Ideas to Life ?
// 						</h3>
// 						<p className='mb-4 leading-relaxed text-text-body'>
// 							Let’s turn your vision into an engaging digital experience that delivers results.
// 						</p>
// 						<a
// 							className={buttonVariants({
// 								variant: 'default',
// 								size: 'lg',
// 							})}
// 							href='mailto:ladreravincejoseph@gmail.com'
// 						>
// 							Let's Build Together
// 						</a>
// 					</CardContent>
// 					<img
// 						alt='decorative-cartoon-illustration'
// 						src={imgRight}
// 						className='core-competency-section__right-thumb'
// 					/>
// 				</Card>
// 			</div>
// 		</section>
// 	);
// }
