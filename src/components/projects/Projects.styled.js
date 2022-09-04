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
width:60%;
background:${({theme})=>theme.colors.primary.darker};
overflow:hidden;
`
export const Image = styled.img`
width:100%;
`
export const ProjectInfoContainer = styled.div`
width:40%;
padding:4rem 2.5rem;
display:flex;
flex-direction:column;
align-items:center;
`
export const ProjectHeading = styled.p`
font-size:2.5rem;
color:${({theme})=>theme.colors.primary.main};
`

export const ProjectDetail = styled.p`
margin:3rem 0;
font-size:1.2rem;
line-height:1.8rem;
color:${({theme})=>theme.colors.primary.contrastText};
text-align:center;
`

export const ProjectButton = styled.button`
  font-size: 1.2rem;
  width: 200px;
  padding: 0.8rem 0;
  cursor: pointer;
  border: transparent;
  border-radius: 5px;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  transition:all .3s ease;
  background: ${(props) => props.theme.colors.primary.main};
  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 189, 149, 0.4);
  }
`;