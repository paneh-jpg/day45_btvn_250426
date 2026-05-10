import "./App.css";
import { Box, Grid } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import { HeaderBar, Question, SideBar } from "./components";
import { useState, useEffect } from "react";
import type { QuestionI, selectingOptionI } from "./types";

function App() {
  const questions: QuestionI[] = [
    // --- MỨC ĐỘ DỄ: KHÁI NIỆM CƠ BẢN ---
    {
      id: 1,
      text: "Khái niệm 'đường bộ' được hiểu như thế nào là đúng?",
      options: [
        "Đường, cầu đường bộ.",
        "Hầm đường bộ, bến phà đường bộ.",
        "Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ.",
      ],
      correct: 2,
    },
    {
      id: 2,
      text: "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
      options: [
        "Là người điều khiển xe cơ giới.",
        "Là người điều khiển xe thô sơ.",
        "Là người điều khiển xe có súc vật kéo.",
      ],
      correct: 0,
    },
    {
      id: 3,
      text: "Trong các khái niệm dưới đây, 'dải phân cách' được hiểu thế nào là đúng?",
      options: [
        "Là bộ phận để ngăn cách không cho các loại xe vào nơi không được phép.",
        "Là bộ phận để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc phân chia phần đường của xe cơ giới và xe thô sơ.",
        "Là bộ phận để phân tách phần đường xe chạy và hành lang an toàn giao thông.",
      ],
      correct: 1,
    },
    {
      id: 4,
      text: "Người tham gia giao thông đường bộ gồm những đối tượng nào?",
      options: [
        "Người điều khiển, người sử dụng phương tiện tham gia giao thông đường bộ.",
        "Người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ.",
        "Cả ý 1 và ý 2.",
      ],
      correct: 2,
    },
    {
      id: 5,
      text: "Theo Luật Giao thông đường bộ, tín hiệu đèn xanh là gì?",
      options: ["Được đi tiếp.", "Dừng lại.", "Đi chậm lại."],
      correct: 0,
    },

    // --- MỨC ĐỘ TRUNG BÌNH: QUY TẮC GIAO THÔNG ---
    {
      id: 6,
      text: "Người lái xe phải làm gì khi điều khiển xe vào đường cao tốc?",
      options: [
        "Phải có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường.",
        "Nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi vào làn đường của đường cao tốc.",
        "Cả ý 1 và ý 2.",
      ],
      correct: 2,
    },
    {
      id: 7,
      text: "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào?",
      options: [
        "Nhường đường cho xe đi bên trái.",
        "Nhường đường cho xe đi bên phải.",
        "Xe nào to hơn được đi trước.",
      ],
      correct: 0,
    },
    {
      id: 8,
      text: "Khi muốn chuyển hướng, người lái xe phải thực hiện như thế nào?",
      options: [
        "Quan sát gương và quay đầu xe ngay.",
        "Giảm tốc độ và có tín hiệu báo hướng rẽ.",
        "Tăng tốc độ để nhanh chóng chuyển hướng.",
      ],
      correct: 1,
    },
    {
      id: 9,
      text: "Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi dàn hàng ngang không?",
      options: [
        "Được phép nếu đường rộng.",
        "Chỉ được đi dàn hàng ngang tối đa 3 xe.",
        "Không được phép.",
      ],
      correct: 2,
    },
    {
      id: 10,
      text: "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng?",
      options: [
        "Nơi đường hẹp chỉ đủ cho một xe chạy, xe nào ở gần chỗ tránh hơn nên vào vị trí tránh.",
        "Xe xuống dốc phải nhường đường cho xe đang lên dốc.",
        "Cả ý 1 và ý 2.",
      ],
      correct: 2,
    },

    // --- MỨC ĐỘ KHÁ: BIỂN BÁO & VẠCH KẺ ĐƯỜNG ---
    {
      id: 11,
      text: "Biển báo hiệu hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số, chữ viết màu đen là loại biển gì?",
      options: ["Biển báo nguy hiểm.", "Biển báo cấm.", "Biển hiệu lệnh."],
      correct: 1,
    },
    {
      id: 12,
      text: "Biển báo hiệu hình tam giác đều, viền đỏ, nền màu vàng, trên có hình vẽ màu đen là loại biển gì?",
      options: ["Biển báo nguy hiểm.", "Biển báo chỉ dẫn.", "Biển báo cấm."],
      correct: 0,
    },
    {
      id: 13,
      text: "Vạch kẻ đường màu vàng nét đứt có ý nghĩa gì?",
      options: [
        "Phân chia hai chiều xe chạy ngược chiều nhau, được phép đè vạch.",
        "Phân chia hai chiều xe chạy ngược chiều nhau, không được đè vạch.",
        "Phân chia các làn xe chạy cùng chiều.",
      ],
      correct: 0,
    },
    {
      id: 14,
      text: "Người lái xe phải làm gì khi gặp biển báo 'Stop'?",
      options: [
        "Dừng lại nếu thấy có xe khác đang đến.",
        "Giảm tốc độ rồi đi tiếp.",
        "Dừng lại trong mọi trường hợp, kể cả khi không có xe đi qua.",
      ],
      correct: 2,
    },
    {
      id: 15,
      text: "Tác dụng của mũ bảo hiểm cho người đi xe mô tô là gì?",
      options: [
        "Để làm đẹp.",
        "Để giảm thiểu chấn thương vùng đầu khi xảy ra tai nạn.",
        "Để tránh bị công an xử phạt.",
      ],
      correct: 1,
    },

    // --- MỨC ĐỘ KHÓ: XỬ LÝ TÌNH HUỐNG & NỒNG ĐỘ CỒN ---
    {
      id: 16,
      text: "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm không?",
      options: [
        "Bị nghiêm cấm.",
        "Không bị nghiêm cấm.",
        "Bị nghiêm cấm tùy từng trường hợp.",
      ],
      correct: 0,
    },
    {
      id: 17,
      text: "Người lái xe mô tô có được phép buông cả hai tay khi đang điều khiển xe không?",
      options: ["Được phép.", "Không được phép.", "Được phép nếu đường vắng."],
      correct: 1,
    },
    {
      id: 18,
      text: "Hành vi đưa xe cơ giới không bảo đảm tiêu chuẩn an toàn kỹ thuật vào tham gia giao thông có bị nghiêm cấm không?",
      options: ["Không bị nghiêm cấm.", "Bị nghiêm cấm.", "Chỉ bị nhắc nhở."],
      correct: 1,
    },
    {
      id: 19,
      text: "Người điều khiển xe ô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
      options: [
        "Bị nghiêm cấm.",
        "Chỉ bị nghiêm cấm nếu nồng độ vượt ngưỡng.",
        "Không bị nghiêm cấm.",
      ],
      correct: 0,
    },
    {
      id: 20,
      text: "Khi xảy ra tai nạn giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
      options: [
        "Xâm phạm tính mạng, sức khỏe, tài sản của người bị nạn và người gây tai nạn.",
        "Lợi dụng việc xảy ra tai nạn để hành hung, đe dọa người gây tai nạn.",
        "Cả ý 1 và ý 2.",
      ],
      correct: 2,
    },

    // --- MỨC ĐỘ RẤT KHÓ: TỐC ĐỘ & ƯU TIÊN ---
    {
      id: 21,
      text: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông: Xe chữa cháy, Xe cứu thương, Xe quân sự?",
      options: [
        "Xe chữa cháy -> Xe quân sự -> Xe cứu thương.",
        "Xe quân sự -> Xe chữa cháy -> Xe cứu thương.",
        "Xe cứu thương -> Xe chữa cháy -> Xe quân sự.",
      ],
      correct: 0,
    },
    {
      id: 22,
      text: "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu vàng nhấp nháy, người lái xe phải làm gì?",
      options: [
        "Dừng lại ngay lập tức.",
        "Được đi tiếp nhưng phải giảm tốc độ, chú ý quan sát nhường đường cho người đi bộ.",
        "Tăng tốc vượt qua thật nhanh.",
      ],
      correct: 1,
    },
    {
      id: 23,
      text: "Tốc độ tối đa cho phép đối với xe máy chuyên dùng trên đường bộ là bao nhiêu?",
      options: ["50 km/h.", "60 km/h.", "40 km/h."],
      correct: 2,
    },
    {
      id: 24,
      text: "Khoảng cách an toàn tối thiểu giữa hai xe khi chạy với tốc độ 60 km/h trên đường khô ráo là bao nhiêu?",
      options: ["35 mét.", "55 mét.", "70 mét."],
      correct: 0,
    },
    {
      id: 25,
      text: "Người lái xe phải xử lý như thế nào khi quan sát phía trước thấy người đi bộ đang sang đường tại nơi có vạch kẻ đường dành cho người đi bộ?",
      options: [
        "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng để nhường đường cho người đi bộ.",
        "Bấm còi hối thúc người đi bộ đi nhanh qua.",
        "Lách qua trước mặt người đi bộ.",
      ],
      correct: 0,
    },
  ];

  const [remainingTime, setRemainingTime] = useState(600);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "warning">(
    "success",
  );
  const [selectingOption, setSelectingOption] = useState<selectingOptionI>({});
  /*
   * {
   *   10: 2,
   *   4: null,
   *   2: 0,
   * }
   * */

  const [questionIndex, setQuestionIndex] = useState(0);

  const handleSubmit = (message: string, severity: "success" | "warning") => {
    setIsSubmitted(true);

    setToastMessage(message);

    setToastSeverity(severity);

    setOpenToast(true);
  };

  useEffect(() => {
    if (isSubmitted) return;

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          handleSubmit("Hết thời gian. Bài thi đã được nộp", "warning");

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isSubmitted) return;

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [questionIndex, isSubmitted]);

  const selectingQuestion = questions[questionIndex];

  const onAnswer = (optionIndex: number) => {
    setSelectingOption({
      ...selectingOption,
      [selectingQuestion.id]: optionIndex,
    });
  };

  const onNext = () => {
    if (questionIndex === questions.length - 1) return;

    setQuestionIndex(questionIndex + 1);
  };

  const onPrev = () => {
    if (questionIndex === 0) return;

    setQuestionIndex(questionIndex - 1);
  };

  const onSelectQuestion = (index: number) => {
    setQuestionIndex(index);
  };

  return (
    <>
      <HeaderBar
        remainingTime={remainingTime}
        onClick={() => handleSubmit("Nộp bài thành công", "success")}
      />
      <Box className={"container"}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Question
              isSubmitted={isSubmitted}
              question={selectingQuestion}
              index={questionIndex + 1}
              selectingIndex={selectingOption[selectingQuestion.id]}
              onAnswer={onAnswer}
            />
          </Grid>
          <Grid size={4}>
            <SideBar
              onSelectQuestion={onSelectQuestion}
              totalQuestion={questions.length}
              selectingQuestion={questionIndex}
              onNext={onNext}
              onPrev={onPrev}
            />
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={() => setOpenToast(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={toastSeverity}
          onClose={() => setOpenToast(false)}
          variant="filled"
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
