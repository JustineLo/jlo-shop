import { styled } from "styled-components";
import banner from "../assets/jloshopbanner3.png";

const ImageContainer = styled.div`
  position: relative;
  background-color: var(--black);
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 60px 0;

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, var(--background), transparent);
  }

  img {
    margin-top: 65px;
    width: 100%;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    img {
      margin: 0;
      width: auto;
      object-fit: contain;
    }
  }
`;
function Header() {
  return (
    <ImageContainer>
      <img src={banner} alt="Banner"></img>
    </ImageContainer>
  );
}

export default Header;
