import styled from "styled-components";

const Main = styled.div`
  min-height: calc(100vh - 70px);
  background: url("http://thesweetsetup.com/wp-content/uploads/2016/12/eBooks-Ecosystems-SS-Hero-2.jpg")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Banner = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  display: inline-block;
  padding: 2rem;
  border-radius: 20px;
`;

const BannerTitle = styled.h1`
  font-family: monospace;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 3rem;
  font-weight: 400;
`;

const BannerButton = styled.button`
  padding: 1rem 3rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  background: #f09d51;
  color: #222;
  border: 1px solid #f09d51;
  transition: all 0.3s linear;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: #f09d51;
  }
`;

const LandingPage = () => {
  return (
    <Main>
      <Banner>
        <BannerTitle>seize the day with book club</BannerTitle>
        <BannerButton>take a tour</BannerButton>
      </Banner>
    </Main>
  );
};

export default LandingPage;
