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
                        <FooterLinkTitle>Sections</FooterLinkTitle>
                        <FooterLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-70}>About Us</FooterLink>
                            <FooterLink to='what' smooth={true} duration={500} spy={true} exact='true' offset={-70}>What We Do</FooterLink>
                            <FooterLink to='events' smooth={true} duration={500} spy={true} exact='true' offset={-70}>Events</FooterLink>
                            <FooterLink to='services' smooth={true} duration={500} spy={true} exact='true' offset={-70}>Get Involved</FooterLink>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <Socials>
                    <SocialsWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            HCS
                        </SocialLogo>
                        <Copyrights> HCS © {new Date().getFullYear()} All rights reserved.</Copyrights>
                        <SocialIcons>
                            <SocialIconsLink href="//www.facebook.com/pages/Heartland-Family-Church/732450293475286" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href="//www.youtube.com/channel/UCM2hwliIfafsmomy8yQcp_Q/videos" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink href="//twitter.com/Heartlandfamily" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialsWrap>
                </Socials>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
