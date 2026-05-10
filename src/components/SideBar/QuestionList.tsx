import { Box } from "@mui/material";
import styles from "./styles.module.sass";

interface QuestionNumberProps {
  questionNumber: number;
  isSelecting: boolean;
}

interface QuestionListProps {
  totalQuestion: number;
  selectingQuestion: number;
  onSelectQuestion: (index: number) => void;
}

const QuestionNumber = ({
  questionNumber,
  isSelecting,
}: QuestionNumberProps) => {
  return (
    <>
      <Box
        className={isSelecting ? styles.selectingQuestion : ""}
        sx={{
          width: 50,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
      >
        {questionNumber}
      </Box>
    </>
  );
};

const QuestionList = ({
  totalQuestion,
  selectingQuestion,
  onSelectQuestion,
}: QuestionListProps) => {
  return (
    <>
      <Box sx={{ mb: 2, fontWeight: "bold" }}>Danh Sách Câu Hỏi</Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          width: "full",
        }}
      >
        {Array.from({ length: totalQuestion }).map((_, i) => (
          <Box
            key={i}
            sx={{
              flex: "0 0 calc(20% - 8px)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              onClick={() => onSelectQuestion(i)}
              sx={{
                flex: "0 0 calc(20% - 8px)",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <QuestionNumber
                questionNumber={i + 1}
                isSelecting={i === selectingQuestion}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default QuestionList;
