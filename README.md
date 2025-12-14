# 상견례 초대장 웹앱 개요

React + Vite로 구현된 단일 페이지 초대장입니다. Tailwind CSS v4(실험적인 PostCSS 플러그인)와 framer-motion을 활용해 스크롤 기반 인터랙션과 모바일 중심 레이아웃을 제공합니다.

## 주요 화면 구성
- **Layout** (`src/components/Layout.jsx`): 430px 최대 너비의 기기 프레임을 만들고 배경 그림자를 적용합니다.
- **Hero** (`src/components/Hero.jsx`): 초대 문구 타이핑 효과와 목표 날짜(`introConfig.dDayDate`) 기반 D-Day 배지를 표시합니다.
- **StoryTimeline** (`src/components/StoryTimeline.jsx`): `storyData` 배열을 이용해 연도별 사진/텍스트 타임라인을 양쪽 교차 레이아웃과 애니메이션으로 렌더링합니다.
- **Invitation 섹션** (`src/App.jsx`): `invitationDetails`와 `locationInfo`로 초대 정보와 장소명을 노출합니다.
- **Location** (`src/components/Location.jsx`): 장소 설명과 지하철 안내, 네이버/카카오 지도 링크, 전화 연결 버튼을 제공합니다. 현재 지도 영역은 `/public/map_placeholder.png` 배경을 사용하는 이미지 플레이스홀더입니다.
- **Closing** (`src/components/Closing.jsx`): `weatherInfo`, `closingConfig`, `calendarEvent` 값을 기반으로 날씨 카드, 인사말, 구글 캘린더 일정 추가 버튼을 렌더링합니다.

## 데이터 설정
`src/constants.js`에서 초대장 문구, 일정 데이터, 지도 링크, 날씨 정보 등을 통합 관리합니다. 이미지 파일 경로(`/20190706.jpg` 등)는 `public` 루트 기준 절대 경로를 사용합니다.

## 개발/빌드
```bash
npm install
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 번들 생성
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 검사
```

## 기술 스택
- **React 19 / Vite 7**: 최신 React 런타임과 Vite 번들러 기반.
- **Tailwind CSS 4**: `@tailwindcss/postcss` 플러그인을 통해 PostCSS에서 Tailwind 지시어를 처리합니다(`src/index.css`).
- **framer-motion**: 스크롤 진입 애니메이션과 페이드/슬라이드 효과.
- **lucide-react**: 위치, 전화, 날씨 관련 아이콘 세트.
