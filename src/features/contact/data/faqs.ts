type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
  color:
    | "game-red"
    | "game-blue"
    | "game-purple"
    | "game-yellow"
    | "game-green";
};

const faqs: FrequentlyAskedQuestion[] = [
  {
    question: "⚔️ What types of projects do you accept?",
    answer:
      "I specialize in frontend development projects but I also accept full-stack, performance optimization, and mentoring requests for fellow developers.",
    color: "game-blue",
  },
  {
    question: "⏰ What's your typical project timeline?",
    answer:
      "Project duration varies based on complexity and scope. Most projects range from 2-8 weeks, with detailed planning provided during initial consultation.",
    color: "game-green",
  },
  {
    question: "👥 Do you work with other developers?",
    answer:
      "Absolutely! I enjoy collaborating with fellow developers and am open to both freelance and professional opportunities.",
    color: "game-purple",
  },
];

export { faqs };
