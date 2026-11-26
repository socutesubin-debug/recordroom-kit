# recordroom-kit

레코드룸(recordroom.mag)의 카드뉴스 KIT. 원고와 사진을 넣으면 1080×1350 카드 이미지·영상으로 저장한다.

## 쓰는 법

1. Pages 주소에서 KIT를 연다.
2. 원고: 대화에서 받은 KIT 코드를 "원고 불러오기 → KIT 코드 붙여넣기"에 넣는다.
3. 카드마다 사진·영상을 올리고 위치·크기·글꼴·꾸미기 요소를 조절한다.
4. "이 카드 저장" 또는 "전체 ZIP 저장".

## AI로 빈 곳 채우기

사진을 줄이거나 옮겨서 생긴 빈 곳을 AI가 이어 그린다.

- 처음 한 번 모델 파일(약 30MB)을 내려받는다.
- 모든 처리는 브라우저 안에서 일어나고, 사진은 기기 밖으로 나가지 않는다.
- 결과가 마음에 들지 않으면 "AI 채우기 되돌리기"를 누른다.
- 영상에는 쓸 수 없다.

## 사용한 외부 자료

- AI 모델: [MI-GAN](https://github.com/Picsart-AI-Research/MI-GAN) (Picsart AI Research, MIT License). `models/migan.onnx`는 [andraniksargsyan/migan](https://huggingface.co/andraniksargsyan/migan)의 공개 파일이며 라이선스 전문은 `models/MIGAN-LICENSE.txt`.
- 실행 엔진: [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) 1.22.0 (jsDelivr에서 불러옴, MIT License).
- 글꼴: [Pretendard](https://github.com/orioncactus/pretendard) (SIL Open Font License), Google Fonts.
- 묶음 저장: [JSZip](https://github.com/Stuk/jszip) 3.10.1.
