import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: var(--dark-grey);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--primary-light);
    }
  }

  .active {
    color: var(--primary);
  }
`;
function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Container>
      <button
        className={i18n.language === "en" ? "active" : ""}
        onClick={() => i18n.changeLanguage("en")}
      >
        English
      </button>
      /
      <button
        className={i18n.language === "fr" ? "active" : ""}
        onClick={() => i18n.changeLanguage("fr")}
      >
        Français
      </button>
    </Container>
  );
}

export default LanguageSwitcher;
