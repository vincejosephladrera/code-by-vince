import Card from "@/components/Card";
import Text from "@/components/Text";

type ExpertiseCardProps = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const ExpertiseCard = ({
  icon: Icon,
  title,
  description,
}: ExpertiseCardProps) => {
  return (
    <Card className="text-left">
      {Icon && (
        <div className="mb-6">
          <Icon />
        </div>
      )}
      <Text variantColor="primary" size="lg" className="mb-3 font-extrabold">
        {title}
      </Text>
      <Text>{description}</Text>
    </Card>
  );
};

export default ExpertiseCard;
