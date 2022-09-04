import styled from "styled-components";

export const ProjectSection = styled.section`
margin:6rem 0;
width:100vw;
max-width:100%;
`

export const SectionHeading = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem 0 4rem 0;
  font-size: 3rem;
  color: white;
  letter-spacing: 1px;
  @media (max-width: 872px) {
    font-size: 2.5rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const ProjectContainer = styled.section`
display:flex;
align-items:center;
` 
export const ProjectImageContainer = styled.div`
width:65%;
background:${({theme})=>theme.colors.primary.darker};
`
export const Image = styled.img`
width:100%;
`
export const ProjectInfoContainer = styled.div`
width:35%;
padding:2rem;
`
export const ProjectHeading = styled.h1`

`