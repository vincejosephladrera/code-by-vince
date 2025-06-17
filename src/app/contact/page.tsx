import ContactHeader from "@/features/contact/components/ContactHeader";
// import ContactForm from "@/features/contact/components/ContactForm";
import ContactInfo from "@/features/contact/components/ContactInfo";
import Container from "@/components/Container";
import QuestCategories from "@/features/contact/components/QuestCategories";
import Faqs from "@/features/contact/components/Faqs";
import SocialMediaChannels from "@/features/contact/components/SocialMediaChannels";

const Contact = () => {
  return (
    <>
      <div className="py-20">
        <ContactHeader />
        <Container className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="grid gap-6 xl:col-span-2">
            {/* <ContactForm /> */}
            <ContactInfo />
            <Faqs />
          </div>
          <div className="grid gap-6">
            <QuestCategories />
            <SocialMediaChannels />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
