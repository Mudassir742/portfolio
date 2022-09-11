import {
  TestimonialSection,
  SectionHeading,
  TestimonialContainer,
  TestimonialCard,
  RearCard,
  FrontCard,
  Feedback,
  ClientName,
} from "./Testimonials.styled";

const Testimonials = () => {
  return (
    <TestimonialSection>
      <SectionHeading>Testimonials</SectionHeading>
      <TestimonialContainer>
        <TestimonialCard>
          <FrontCard>
            <Feedback>
              Chess Money is a joint venture between a cohort of ex-bankers and
              a listed company that provides human resources management
              services. Each of the Chess partners’ competencies is leveraged to
              offer the best lending experience.
            </Feedback>
            <ClientName>John Doe.</ClientName>
          </FrontCard>
          <RearCard></RearCard>
        </TestimonialCard>
        <TestimonialCard>
          <FrontCard>
            <Feedback>
              Chess Money is a joint venture between a cohort of ex-bankers and
              a listed company that provides human resources management
              services. Each of the Chess partners’ competencies is leveraged to
              offer the best lending experience.
            </Feedback>
            <ClientName>John Doe.</ClientName>
          </FrontCard>
          <RearCard></RearCard>
        </TestimonialCard>
      </TestimonialContainer>
    </TestimonialSection>
  );
};

export default Testimonials;
