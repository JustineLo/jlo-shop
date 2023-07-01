import { styled } from 'styled-components';
import banner from '../assets/banner.jpg';

const ImageContainer = styled.div`
    border-radius: 30px;
    overflow: hidden;

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