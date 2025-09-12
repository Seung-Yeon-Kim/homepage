# IT Solutions Company Website

## 프로젝트 개요
- **프로젝트명**: IT Solutions Company Website
- **목표**: IT 관련 회사의 공식 홈페이지 구축
- **주요 기능**: 회사소개, 사업분야, 제품소개, 고객지원 섹션으로 구성된 기업 웹사이트

## 접속 URL
- **개발 서버**: https://3000-ifummlrzk2y4bpir5n36j-6532622b.e2b.dev
- **로컬 테스트**: http://localhost:3000

## 현재 구현된 기능

### ✅ 완료된 기능
1. **메인 페이지**
   - 히어로 섹션 (회사 슬로건)
   - 핵심 사업분야 소개
   - 주요 제품 쇼케이스
   - 통계 섹션
   - CTA (Call to Action) 섹션

2. **회사소개 섹션** (`/about/*`)
   - 회사소개 (`/about/intro`) - 비전, 미션, 핵심가치, 사업영역
   - 회사 연혁 (`/about/history`) - 타임라인 형식의 연혁 표시
   - 주요 고객사 (`/about/clients`) - 산업분야별 고객사 및 성공사례
   - 대외인증 (`/about/certifications`) - 국제인증, 기술인증, 정부인증, 수상실적
   - 조직도 (`/about/organization`) - 조직 구조 및 부서 소개

3. **네비게이션 시스템**
   - 드롭다운 메뉴가 포함된 상단 네비게이션
   - 모바일 반응형 메뉴
   - 하위 메뉴 호버 효과

4. **디자인 및 스타일링**
   - TailwindCSS를 활용한 모던한 디자인
   - 반응형 레이아웃 (데스크톱/태블릿/모바일)
   - Font Awesome 아이콘 통합
   - 일관된 색상 테마 (블루 계열)

## 기능별 URI 목록

### 회사소개
- `/about/intro` - 회사소개
- `/about/history` - 회사 연혁
- `/about/clients` - 주요 고객사
- `/about/certifications` - 대외인증
- `/about/organization` - 조직도

### 사업분야
- `/business/ai` - AI 솔루션
- `/business/dbcloud` - DB & Cloud
- `/business/data-quality` - 데이터 품질 & 거버넌스
- `/business/system-integration` - 시스템 구축
- `/business/it-consulting` - IT 컨설팅

### 제품소개
- `/products/belog` - BeLog (통합 로그 관리)
- `/products/bepet` - BePet (펫케어 플랫폼)
- `/products/beschool` - BeSchool (교육 관리 시스템)
- `/products/bemon` - BeMon (모니터링 솔루션)
- `/products/test-coverage` - 테스트커버리지
- `/products/elk-stack` - ELK Stack

### 고객지원
- `/support/contact` - 문의하기
- `/support/location` - 오시는 길

### API 엔드포인트
- `POST /api/contact` - 문의 접수

## 아직 구현되지 않은 기능

### 📝 추가 개발 필요
1. **사업분야 상세 페이지** - 현재 기본 템플릿만 있음
2. **제품소개 상세 페이지** - 현재 기본 템플릿만 있음
3. **고객지원 페이지**
   - 문의하기 폼 구현
   - 지도 API 연동 (오시는 길)
4. **검색 기능**
5. **다국어 지원** (영어/중국어/일본어)
6. **관리자 페이지**

## 권장 다음 단계

### 1단계: 콘텐츠 보강
- [ ] 사업분야 각 페이지 상세 내용 작성
- [ ] 제품별 상세 스펙 및 기능 설명 추가
- [ ] 실제 고객사 로고 및 사례 추가

### 2단계: 기능 개선
- [ ] 문의하기 폼 백엔드 연동 (이메일 발송)
- [ ] 지도 API 통합 (Google Maps / Kakao Map)
- [ ] 검색 기능 구현
- [ ] 다운로드 센터 (브로셔, 카탈로그)

### 3단계: 성능 최적화
- [ ] 이미지 최적화 및 CDN 적용
- [ ] SEO 메타 태그 추가
- [ ] 페이지 로딩 속도 개선
- [ ] Analytics 통합 (Google Analytics)

### 4단계: 프로덕션 배포
- [ ] Cloudflare Pages 배포 설정
- [ ] 커스텀 도메인 연결
- [ ] SSL 인증서 설정
- [ ] 환경 변수 설정 (API 키 등)

## 기술 스택
- **프레임워크**: Hono (Cloudflare Workers)
- **스타일링**: TailwindCSS
- **아이콘**: Font Awesome
- **배포**: Cloudflare Pages
- **런타임**: Cloudflare Workers
- **빌드 도구**: Vite
- **프로세스 관리**: PM2

## 개발 환경 설정

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run build
pm2 start ecosystem.config.cjs
```

### 빌드
```bash
npm run build
```

### 배포
```bash
npm run deploy
```

## 데이터 구조
현재 정적 콘텐츠로 구성되어 있으며, 향후 다음 데이터 모델 구현 예정:
- 제품 정보 (Products)
- 고객 문의 (Inquiries)
- 뉴스/공지사항 (News)
- 채용 정보 (Careers)

## 프로젝트 상태
- **개발 상태**: ✅ 기본 구조 완성
- **배포 상태**: ✅ 개발 서버 활성
- **최종 업데이트**: 2024년 1월

## 라이선스
© 2024 IT Solutions. All rights reserved.