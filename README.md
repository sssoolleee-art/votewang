# 투표왕

토스 앱인토스(AIT) 미니앱. 매일 업데이트되는 투표에 참여하고 다른 사람들의 선택을 확인하는 앱.

## 기능

- 매일 새로운 투표 주제
- 실시간 투표 결과 확인
- 결과 공유
- 인앱광고 (배너, 전면형, 리워드)

## 기술 스택

- React + TypeScript + Vite
- 앱인토스(AIT) 웹 프레임워크

## 개발

```bash
npm install
npm run dev
```

## 빌드 및 배포

```bash
npx ait build     # .ait 번들 생성
```

AIT 콘솔(https://apps-in-toss.toss.im)에서 .ait 파일 업로드 후 심사 요청.

## 에셋

- `assets/` — AIT 콘솔 등록용 스토어 에셋 (아이콘, 스크린샷, 썸네일)
- `public/` — 빌드 포함 정적 파일 (favicon, 앱 아이콘)
