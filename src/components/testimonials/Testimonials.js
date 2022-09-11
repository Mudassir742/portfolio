import {
  TestimonialSection,
  SectionHeading,
  TestimonialContainer,
  TestimonialCard,
  RearCard,
  FrontCard,
} from "./Testimonials.styled";

const Testimonials = () => {
  return (
    <TestimonialSection>
      <SectionHeading>Testimonials</SectionHeading>
      <TestimonialContainer>
        <TestimonialCard>
          <RearCard></RearCard>
          <FrontCard>
            
          </FrontCard>
        </TestimonialCard>
      </TestimonialContainer>
    </TestimonialSection>
  );
};

export default Testimonials;
