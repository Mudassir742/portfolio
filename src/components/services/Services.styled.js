import styled from "styled-components";

export const ServiceSection = styled.section`
width:100vw;
padding:2rem 5rem 5rem 5rem;
max-width:100%;
background:${({theme})=>theme.colors.primary.darker}
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

export const CardSection = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 40px;
`

export const ServiceCard = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background:${({theme})=>theme.colors.primary.dark};
color:white;
padding:1.5rem 2rem;
border-radius:10px;
`

export const ServiceHeading = styled.p`
font-size:1.8rem;
font-weight:500;
letter-spacing:1px;

`
export const ServiceDetail = styled.p`
text-align :center;
margin:1rem 0;
line-height:1.5rem;
letter-spacing:1px;
font-size:1rem;
`