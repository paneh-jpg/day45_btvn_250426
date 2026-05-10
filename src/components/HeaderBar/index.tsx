import { Box, Typography, Button } from "@mui/material";
import styles from "./styles.module.sass";

interface Props {
  remainingTime: number;
  onClick: () => void;
}

const HeaderBar = ({ remainingTime, onClick }: Props) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds,
  ).padStart(2, "0")}`;
  return (
    <Box className={styles.container}>
      <Box className={`${styles.header} container`}>
        <Box>
          <Box sx={{ fontSize: "24px" }}>Ôn Thi GPLX</Box>
          <Box sx={{ fontSize: "20px" }}>Đề thi ngẫu nhiên số 1</Box>
        </Box>
        <Box className={styles.left}>
          <Typography>{formattedTime}</Typography>
          <Button
            variant="contained"
            className={styles.submit}
            onClick={onClick}
            sx={{ ml: 2 }}
          >
            Nộp Bài
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderBar;
