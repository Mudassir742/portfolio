import {
  Image,
  TechCard,
  TechContent,
  TechDetail,
  TechHeading,
  TechInfo,
} from "./Technology.styled";

const TechnologyCard = ({ image, techName, techDetail }) => {
  return (
    <TechCard>
      <TechContent>
        <Image src={image} alt="logo" />
        <TechInfo>
          <TechHeading>{techName}</TechHeading>
          <TechDetail>{techDetail}</TechDetail>
        </TechInfo>
      </TechContent>
    </TechCard>
  );
};

export default TechnologyCard;
