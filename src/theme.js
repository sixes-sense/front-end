import { createTheme } from '@mui/material/styles';

// Material-UI 테마 생성
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // 주요 색상
    },
    secondary: {
      main: '#FF4081', // 보조 색상
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // 폰트 설정
  },
  // 다른 테마 설정 옵션을 추가할 수 있음
});

export default theme;
