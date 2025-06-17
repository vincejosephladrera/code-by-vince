import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { socialMediaAccounts } from "../data/socialMediaAccounts";

const SocialMediaChannels = () => {
  return (
    <Card className="border-primary">
      <CardContent>
        <h2 className="text-game-slate mb-6 gap-2 text-2xl font-semibold">
          🌐 Social Channels
        </h2>
        <div className="flex justify-center gap-6 text-center">
          {socialMediaAccounts.map(({ platform, link, emoji }) => (
            <Link
              className="hover:text-primary hover:bg-primary/5 rounded-lg bg-gray-50 p-4 transition-all"
              href={link}
              target="_blank"
              key={platform}
            >
              <p className="mb-2 text-2xl">{emoji}</p>
              <p className="text-xs font-medium">{platform}</p>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMediaChannels;
