import { Grid, Modal } from "@mui/material";
import { Project } from "../data";
import styled from "styled-components";
import FiveStars from "./FiveStars";

interface Props {
  project: Project;
  showModal: boolean;
  onClose: () => void;
}

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: white;
  height: 85vh;
  width: 85vw;
  outline: none;
  padding: 20px 100px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }
`;

const SmallImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 10px;
`;

const SmallImages = styled(Grid)`
  height: 30%;
  overflow-x: auto;
  white-space: nowrap;
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  h3 {
    color: var(--primary);
  }

  #project-modal-description {
    margin: 20px 0;
    line-height: 1.5;
  }
`;

function ProductDetailModal({ project, showModal, onClose }: Props) {
  if (!showModal) {
    return null;
  }

  return (
    <Modal
      open={showModal}
      onClose={onClose}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      <ModalContainer>
        <ImageColumn>
          <Pictures>
            <MainImage>
              <img src={project.imagesUrl[0]} alt={project.title} />
            </MainImage>

            <SmallImages>
              {project.imagesUrl.map((image, index) => {
                return (
                  <SmallImage src={image} alt={project.title} key={index} />
                );
              })}
            </SmallImages>
          </Pictures>
        </ImageColumn>

        <DetailsColumn>
          <DetailContainer>
            <h1 id="project-modal-title">{project.title}</h1>
            <FiveStars color="#FFB900" />
            <h3>$ {project.price}</h3>
            <p id="project-modal-description">{project.description}</p>
          </DetailContainer>
        </DetailsColumn>
      </ModalContainer>
    </Modal>
  );
}

export default ProductDetailModal;
