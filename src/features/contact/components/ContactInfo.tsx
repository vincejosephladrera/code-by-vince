import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { contactInfos } from "../data/contacInfo";

const ContactInfo = () => {
  return (
    <Card className="border-primary">
      <CardContent>
        <h2 className="text-game-slate mb-6 gap-2 text-2xl font-semibold">
          📱 Contact Info
        </h2>
        {contactInfos.map(({ label, content, link, icon }) => (
          <Card className="mb-4" key={link}>
            <CardContent className="xs:flex-row xs:items-center flex flex-col items-start gap-4">
              <span className="text-2xl">{icon}</span>
              <div className="grid gap-2">
                <p className="text-sm text-gray-500">{label}</p>
                <Link
                  className="text-game-slate hover:text-primary font-medium transition-colors"
                  href={link}
                >
                  {content}
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
