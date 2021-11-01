import React from 'react'
import Icon1 from '../../images/svg-8.svg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { 
FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
Socials,
SocialsWrap,
SocialLogo,
SocialIcons,
SocialIconsLink,
Copyrights,
SocialIcon
} from './FooterElements'

const toggleHome = () => {
    scroll.scrollToTop()
};
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <Socials>
                    <SocialsWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            HCS
                        </SocialLogo>
                        <Copyrights> HFC © {new Date().getFullYear()} All rights reserved.</Copyrights>
                        <SocialIcons>
                            <SocialIconsLink href="//www.facebook.com/pages/Heartland-Family-Church/732450293475286" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href="//www.youtube.com/channel/UCM2hwliIfafsmomy8yQcp_Q/videos" target="_blank" aria-label="Youtube">
                                <SocialIcon src={Icon1} />
                            </SocialIconsLink>
                            <SocialIconsLink href="//twitter.com/Heartlandfamily" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialsWrap>
                </Socials>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
