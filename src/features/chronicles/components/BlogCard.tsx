import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Blog } from "@/features/chronicles/data/blogs.ts";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const BlogCard = ({ title, excerpt, slug, tags }: Blog) => {
  return (
    <Link href={`/blogs/${slug}`} className="group">
      <Card className="group-hover:border-primary transition-[border-color, translate-y] group-hover:shadow-primary/30 gap-4 duration-300 group-hover:translate-y-[-8px] group-hover:shadow-xl">
        <CardHeader>
          <h3 className="text-game-slate group-hover:text-primary line-clamp-3 text-xl font-bold transition-colors duration-300">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="mb-2 line-clamp-3">{excerpt}</p>
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" color="green">
              {tag}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
