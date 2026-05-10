import { Box } from "@mui/material";
import Option from "./Option.tsx";
import type { QuestionI } from "../../types/index.ts";

interface Props {
  question: QuestionI;
  index: number;
  selectingIndex: number | null;
  onAnswer: (optionIndex: number) => void;
  isSubmitted: boolean;
}

const Question = ({
  question,
  index,
  selectingIndex,
  onAnswer,
  isSubmitted,
}: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "4px",
          alignItems: "top",
          mt: "40px",
        }}
      >
        <Box
          style={{
            fontSize: "22px",
            backgroundColor: "rgb(219 234 254)",
            borderRadius: "5px",
            padding: "8px",
            width: "150px",
          }}
        >
          Câu {index}
        </Box>
        <Box style={{ fontSize: "24px", paddingLeft: "8px" }}>
          {question.text}
        </Box>
      </Box>

      {question.options.map((option, index) => (
        <Option
          option={option}
          index={index}
          isSelected={selectingIndex === index}
          onSelect={onAnswer}
          isSubmitted={isSubmitted}
        />
      ))}
    </>
  );
};

export default Question;
