import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { blogs } from "../data/blogs";

const DeveloperLogsHeader = () => {
  return (
    <div className="mb-16">
      <Container>
        <Card>
          <CardContent>
            <div className="grid justify-center text-center">
              <h1 className="text-game-slate mb-6 text-5xl font-bold">
                Developer Logs
              </h1>
              <p className="mb-8 max-w-3xl text-xl text-gray-600">
                Track the journey. Learn from the grind. These are my developer
                logs — every bug, breakthrough, and boss battle along the way.
              </p>
              <div className="flex justify-center">
                <Card className="border-primary w-fit border-2 py-4">
                  <CardContent className="md:px-4">
                    <p className="text-primary text-2xl font-bold">
                      {blogs.length}
                    </p>
                    <p className="text-game-slate text-sm">
                      Adventure Documented
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default DeveloperLogsHeader;
