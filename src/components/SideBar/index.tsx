import { Button } from "@mui/material";
import QuestionList from "./QuestionList.tsx";

interface Props {
  onNext: () => void;
  onPrev: () => void;
  totalQuestion: number;
  selectingQuestion: number;
  onSelectQuestion: (index: number) => void;
}

const SideBar = ({
  totalQuestion,
  selectingQuestion,
  onNext,
  onPrev,
  onSelectQuestion,
}: Props) => {
  return (
    <>
      <Button onClick={onPrev}>Prev</Button>
      <Button onClick={onNext}>Next</Button>
      <QuestionList
        totalQuestion={totalQuestion}
        selectingQuestion={selectingQuestion}
        onSelectQuestion={onSelectQuestion}
      />
    </>
  );
};

export default SideBar;
