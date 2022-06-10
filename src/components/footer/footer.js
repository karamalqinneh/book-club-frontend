import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFooter = styled.footer`
  padding: 3em 3em 0;
  background: hsl(0, 0%, 10%);
  color: #fffced;
`;

const FooterWidgets = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Widget = styled.div`
  width: 30%;
  &.footer-cta a {
    display: block;
    margin-top: 1em;
    padding: 0 0.5em;
    font-size: 2em;
    font-weight: 900;
    color: #fffced;
    text-align: center;
    text-decoration: none;
    border: 5px solid #fffced;
  }
`;

const WidgetTitle = styled.h4`
  font-size: 1.3em;
`;

const FooterMenuUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const FooterMenua = styled.a`
  display: block;
  padding-bottom: 0.5em;
  color: #fffced;
  text-decoration: none;
  &:focus::before {
    margin-right: 0.5em;
    content: "›";
  }
`;

const FooterCta = styled.a`
  display: block;
  margin-top: 1em;
  padding: 0 0.5em;
  font-size: 2em;
  font-weight: 900;
  color: #fffced;
  text-align: center;
  text-decoration: none;
  border: 5px solid #fffced;
  &:hover {
    background: #f09d51;
  }
  &:focus {
    background: #f09d51;
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooter class="footer">
        <FooterWidgets class="footer-widgets centered">
          <Widget class="widget footer-menu">
            <WidgetTitle class="widget-title">Find your way</WidgetTitle>
            <FooterMenuUL>
              <li>
                <FooterMenua href="#">Home</FooterMenua>
              </li>
              <li>
                <FooterMenua href="#">Blog</FooterMenua>
              </li>
              <li>
                <FooterMenua href="#">Ads</FooterMenua>
              </li>
              <li>
                <FooterMenua href="#">About</FooterMenua>
              </li>
              <li>
                <FooterMenua href="#">Contact</FooterMenua>
              </li>
            </FooterMenuUL>
          </Widget>
          <Widget classList={"footer-cta"}>
            <WidgetTitle class="widget-title">PLACE AN ORDER</WidgetTitle>
            <p>What are you waiting for? The book is ready for you to read.</p>
            <FooterCta href="Browse.html">SHOP NOW!</FooterCta>
          </Widget>
          <Widget class="widget footer-address">
            <address id="place">
              <WidgetTitle class="widget-title"> Book Club</WidgetTitle>
              <p>Amman, Jordan</p>
            </address>
          </Widget>
        </FooterWidgets>
      </StyledFooter>
    </>
  );
};

export default Footer;
