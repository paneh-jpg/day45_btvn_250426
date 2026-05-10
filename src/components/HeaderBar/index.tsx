import { Box, Typography, Button, Container } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
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
      <Container maxWidth="xl">
        <Box className={styles.header}>
          <Box className={styles.info}>
            <Typography className={styles.title}>ÔN THI GPLX</Typography>
            <Typography className={styles.subtitle}>
              Đề thi ngẫu nhiên số 1
            </Typography>
          </Box>

          <Box className={styles.left}>
            <Box className={styles.timer}>
              <TimerIcon sx={{ fontSize: 18 }} />
              <Typography component="span">{formattedTime}</Typography>
            </Box>

            <Button
              variant="outlined"
              className={styles.submit}
              onClick={onClick}
            >
              Nộp Bài
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderBar;
