import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import { Box } from "@mui/material";

interface Props {
  option: string;
  index: number;
  isSelected: boolean;
  onSelect: (optionIndex: number) => void;
  isSubmitted: boolean;
}

const Option = ({
  option,
  index,
  isSelected,
  onSelect,
  isSubmitted,
}: Props) => {
  const onClick = () => {
    if (isSubmitted) return;

    onSelect(index);
  };
  return (
    <Box
      onClick={onClick}
      sx={{
        fontSize: "20px",
        padding: "4px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        margin: "20px 0",
        cursor: isSubmitted ? "not-allowed" : "pointer",
        opacity: isSubmitted ? 0.7 : 1,
      }}
    >
      {isSelected ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
      <span>{option}</span>
    </Box>
  );
};

export default Option;
