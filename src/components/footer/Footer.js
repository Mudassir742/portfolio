import React from 'react'
import { FaRegCopyright } from 'react-icons/fa6'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import {
  FooterContent,
  FooterContainer,
  FooterSection,
  FooterSocials,
  FooterIconLink,
} from './Footer.styled'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterSection>
      <FooterContainer>
        <FaRegCopyright color="#9497ab" />
        <FooterContent>{year} Mudassir Waheed. Built with React.</FooterContent>
      </FooterContainer>

      <FooterSocials>
        <FooterIconLink
          href="https://github.com/Mudassir742"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </FooterIconLink>
        <FooterIconLink
          href="https://www.linkedin.com/in/mudassir-waheed-69b005206/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </FooterIconLink>
        <FooterIconLink href="mailto:mudassirwaheed242@gmail.com" aria-label="Email">
          <FaEnvelope />
        </FooterIconLink>
      </FooterSocials>
    </FooterSection>
  )
}

export default Footer
