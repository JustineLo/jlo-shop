import { styled } from 'styled-components';
import banner from '../assets/banner.jpg';

const ImageContainer = styled.div`
    position: relative;
    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%; 
        background: linear-gradient(to top, rgb(255, 255, 255), transparent);
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
function Header() {
    return(
        <ImageContainer>
            <img src={banner} alt="Banner"></img>
        </ImageContainer>
    )
}

export default Header;