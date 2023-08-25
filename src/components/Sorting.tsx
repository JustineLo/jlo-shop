import { styled } from "styled-components";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useTranslation } from "react-i18next";

interface SortingProps {
  handleSortMethodChange: (method: string) => void;
}

const SortingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: space-between;
    gap: 1rem;
    flex-direction: row;
  }

  p {
    margin: 0;
  }

  Select {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

const Sorting: React.FC<SortingProps> = ({ handleSortMethodChange }) => {
  const { t } = useTranslation();

  const handleChange = (
    event:
      | React.MouseEvent<Element, MouseEvent>
      | React.KeyboardEvent<Element>
      | React.FocusEvent<Element, Element>
      | null,
    value: any
  ) => {
    if (value) {
      handleSortMethodChange(value as string);
    }
  };

  return (
    <SortingContainer>
      <p>{t("sort.label")}</p>
      <Select
        placeholder={t("sort.placeholder")}
        size="sm"
        variant="outlined"
        onChange={handleChange}
      >
        <Option value="priceLowHigh">{t("sort.priceLowHigh")}</Option>
        <Option value="priceHighLow">{t("sort.priceHighLow")}</Option>
        <Option value="newest">{t("sort.newest")}</Option>
        <Option value="latest">{t("sort.latest")}</Option>
      </Select>
    </SortingContainer>
  );
};

export default Sorting;
