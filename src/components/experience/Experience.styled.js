import styled from "styled-components";

export const ExperienceSection = styled.section`
  width: 100vw;
  max-width: 100%;
  padding: 5rem 6rem 6rem 6rem;
  background: ${({ theme }) => theme.colors.primary.darker};
  @media (max-width: 900px) {
    padding: 5rem 3rem;
  }
  @media (max-width: 530px) {
    padding: 4rem 1.6rem;
  }
`;

export const Kicker = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 0 0 4rem 0;
  font-size: 2.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.lighter};
  letter-spacing: -0.5px;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const Timeline = styled.div`
  max-width: 880px;
  margin: 0 auto;
  position: relative;
  padding-left: 2.6rem;
  border-left: 2px solid ${({ theme }) => theme.colors.background.bg2};
  @media (max-width: 560px) {
    padding-left: 1.6rem;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 3.2rem;
  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineDot = styled.span`
  position: absolute;
  left: -3.15rem;
  top: 0.35rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary.darker};
  border: 3px solid ${({ theme }) => theme.colors.primary.main};
  @media (max-width: 560px) {
    left: -2.15rem;
    width: 12px;
    height: 12px;
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin-bottom: 0.3rem;
`;

export const RoleTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoleTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.lighter};
`;

export const Company = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const DateRange = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary.light};
  white-space: nowrap;
`;

export const Location = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary.light};
  margin-bottom: 1.2rem;
`;

export const BulletList = styled.ul`
  margin: 0 0 1.4rem 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Bullet = styled.li`
  font-size: 0.94rem;
  line-height: 1.55rem;
  color: ${({ theme }) => theme.colors.primary.light};
  &::marker {
    color: ${({ theme }) => theme.colors.accent.teal};
  }
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const Tag = styled.span`
  font-size: 0.76rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.primary.lighter};
  background: ${({ theme }) => theme.colors.primary.darker};
  border: 1px solid ${({ theme }) => theme.colors.background.bg2};
`;
