import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <Card className="border-primary">
      <CardContent>
        <h2 className="text-game-slate mb-6 flex flex-nowrap items-center gap-2 text-2xl font-semibold">
          <MessageCircle className="text-primary" />
          Start a New Quest
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">👤 Player Name *</Label>
            <Input id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">📧 Contact Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="col-span-2 grid gap-3">
            <Label htmlFor="type">🎯 Quest Type *</Label>
            <Input
              id="type"
              name="type"
              placeholder="e.g., Frontend Development"
            />
          </div>
          <div className="col-span-2 grid gap-3">
            <Label htmlFor="message">📜 Quest Details *</Label>
            <Textarea placeholder="Tell me about your project, goals, timeline, and any specific challenges you'd like to tackle together..." />
          </div>
          <Button className="col-span-2">
            <Send />
            Send Quest Request
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
