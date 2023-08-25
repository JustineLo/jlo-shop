import { Grid, Modal } from "@mui/material";
import { Project } from "../data";
import styled from "styled-components";
import FiveStars from "./FiveStars";
import { StoreContext } from "../contexts/StoreContext";
import { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";

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
  flex-direction: column;
  background-color: var(--white);
  height: 85vh;
  width: 85vw;
  outline: none;
  padding: 20px 15px;
  box-sizing: border-box;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 20px 100px 15px 100px;
  }
`;

const ModalButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  svg {
    cursor: pointer;
    font-size: 2rem;

    &:hover {
      color: grey;
    }
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 7%;

  @media screen and (min-width: 768px) {
    flex: 1;
    width: auto;
  }
`;

const DetailsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const MainImage = styled.div`
  width: 100%;
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

const SmallImages = styled(Grid)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    height: 30%;
    overflow-x: auto;
    white-space: nowrap;

    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 5px;
      cursor: pointer;
      margin: 0 15px;
    }
  }
`;

const SmallImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 5px;

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  gap: 15px;

  h1 {
    padding: 0px;
    margin: 2px;
  }

  h3 {
    color: var(--black);
    margin: 2px;
  }

  #project-modal-description {
    margin: 20px 0;
    line-height: 1.5;
  }

  button {
    width: 40%;
    margin-top: 4%;
  }

  span {
    display: flex;
    gap: 20px;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      color: var(--primary);
    }
    &:visited {
      color: inherit;
    }
  }
`;

const ButtonStyled = styled.button`
  background-color: var(--primary);
  border: 2px solid transparent;
  color: var(--white);
  border-radius: 5px;
  width: 60%;
  padding: 10px 20px;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: transparent;
    border-color: var(--primary);
    color: var(--primary);
  }
`;

const LinkStyled = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  color: inherit;

  &:hover {
    color: var(--primary);
  }

  &:hover *,
  &:hover svg {
    color: var(--primary);
  }
`;

function ProductDetailModal({ project, showModal, onClose }: Props) {
  if (!showModal) {
    return null;
  }
  const { t } = useTranslation();
  const { dispatch } = useContext(StoreContext);
  const [indexImage, setIndexImage] = useState<number>(0);
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", project });
  };

  return (
    <Modal
      open={showModal}
      onClose={onClose}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      <ModalContainer>
        <ImageColumn>
          <MainImage>
            <img src={project.imagesUrl[indexImage]} alt={project.title} />
          </MainImage>

          <SmallImages>
            {project.imagesUrl.map((image, index) => {
              return (
                <SmallImage
                  src={image}
                  alt={project.title}
                  key={index}
                  onClick={() => setIndexImage(index)}
                />
              );
            })}
          </SmallImages>
        </ImageColumn>

        <DetailsColumn>
          <DetailContainer>
            <h1 id="project-modal-title">{project.title}</h1>
            <FiveStars color="var(--tertiary)" />
            <h3>$ {project.price}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: t(project.description) }}
            ></div>
            <span>
              {project.githubUrl && (
                <LinkStyled
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon /> {t("modal.seeRepo")}
                </LinkStyled>
              )}
              {project.projectUrl !== "" && (
                <LinkStyled
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenInNewIcon /> {t("modal.seeLive")}
                </LinkStyled>
              )}
            </span>

            <ButtonStyled onClick={addToCart}>
              {t("modal.addToCart")}
            </ButtonStyled>
          </DetailContainer>
        </DetailsColumn>
        <ModalButton>
          <CloseIcon onClick={onClose} />
        </ModalButton>
      </ModalContainer>
    </Modal>
  );
}

export default ProductDetailModal;
