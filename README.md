# KYGMIN.com

흑백 + 그린 네오브루탈리즘 테마의 개인 웹사이트. [kygmin.com](https://kygmin.com)에서 GitHub Pages로 서비스 중.

모든 페이지는 EN/KR 이중 언어를 지원한다 — 우하단 EN/한 토글 버튼이 텍스트 스크램블 애니메이션과 함께 언어를 전환한다.

사이트는 크게 세 갈래다. **홈**(이력·경력·연락처), **경력 상세 페이지**(루트에 있는 3개 HTML), 그리고 **플레이하우스**(브라우저 안에서 전부 돌아가는 미니 프로젝트 모음).

## 저장소 구조

```
├── index.html                  # 홈 (학력·경력·활동·플레이하우스 최신 3개·연락처)
├── cv.html                     # 암호 잠금 CV (암호화된 결과물)
├── cv-template.html            # CV 잠금 페이지 틀 (암호 입력 UI + 복호화 코드)
├── fmva-certificate.pdf        # FMVA 인증서 (cv.html 내부에서 링크됨 — 이동 금지)
├── fmva-transcript.pdf         # FMVA 성적표 (〃)
├── privacy.html                # 개인정보 처리방침 (계정·플레이하우스 데이터 공통)
├── auth-widget.js              # 전 페이지 공용 로그인 위젯 (Supabase 세션)
├── kygmin-app-icon.png         # 파비콘 / 홈 화면 아이콘
│
├── sound-of-hope.html          # [경력] 캄보디아 자선 콘서트 페이지
├── sound-of-hope/              #   └ 콘서트 이미지 (포스터·티켓·프로그램)
├── bridge-hackathon.html       # [경력] 브릿지 해커톤 — ClothesBridge 페이지
├── bridge-hackathon/           #   └ 해커톤 이미지 (와이어프레임·디자인·발표·인증서)
├── solution-challenge.html     # [경력] 구글 솔루션 챌린지 — Givplus 페이지
├── solution-challenge/         #   └ Givplus 이미지 (랜딩·지도·사이트맵·아키텍처 등)
│
├── playhouse/                  # 플레이하우스 허브 — 태그 필터가 달린 전체 목록
│   └── index.html
│
├── blueberry/                  # [플레이하우스] 블루베리 스무디 — 한국어 억양 분석기
│   └── index.html              #   YIN 피치 추출 + 비터비 옥타브 보정, 전부 브라우저 내
├── pyrrhus-co/                 # [플레이하우스] 피로스 상사 — 유물 경매 심리전
│   └── index.html
├── indian-poker/               # [플레이하우스] 인디안 포커
│   └── index.html
├── nine-positions/             # [플레이하우스] 나인 포지션
│   └── index.html
├── rps/                        # [플레이하우스] 가위바위보 예측기
│   └── index.html
├── animal/                     # [플레이하우스] 동물 닮은꼴 찾기
│   ├── index.html              #   MediaPipe 얼굴 분석, 100% 브라우저 내 처리
│   └── animals.json            #   동물 12종 라벨링 데이터 (백업용, 코드에는 인라인)
├── animal.html                 # 구주소 → /animal/ 리다이렉트 스텁
│
├── CNAME                       # 커스텀 도메인 (kygmin.com)
└── .gitignore                  # cv-source.html·encrypt_cv.py·private/ 커밋 제외
```

### 정리 원칙

- **HTML 페이지와 PDF는 루트에 둔다.** 페이지 URL은 이미 보낸 CV와 암호화된 `cv.html` 내부 링크에 박혀 있어 바꾸면 깨진다. 특히 `cv.html`은 암호 없이 내용 수정이 불가능하므로 그 안에서 링크되는 파일(`fmva-*.pdf`, 경력 페이지들)은 절대 이동하지 말 것.
- **이미지·데이터는 프로젝트별 폴더에 넣는다.** 경력 페이지는 `프로젝트명.html`(루트) + `프로젝트명/`(에셋 폴더) 패턴.
- **플레이하우스 미니앱은 `폴더명/index.html` 하나로 끝낸다.** `kygmin.com/폴더명/`으로 서비스되고, 빌드 산출물은 전부 인라인해서 단일 파일로 만든다 (외부 JS/CSS 파일 없음 — 예외는 공용 `auth-widget.js`).
- **새 미니앱을 추가하면 세 군데를 같이 고친다.** ① `폴더명/index.html` 생성, ② `playhouse/index.html`의 `.proj-grid`에 카드 추가(`data-tags` 필수), ③ 홈 `index.html`의 §projects에 최신 3개만 유지하도록 카드 교체. 홈 카드는 상대 경로를 쓰고 `data-tags`를 달지 않는다.

## 플레이하우스

| 폴더 | 이름 | 핵심 |
|---|---|---|
| `blueberry/` | 블루베리 스무디 | 한국어 문장을 말하면 본인 중앙값 대비 semitone 음높이 곡선을 그린다. YIN 피치 추출·음절 핵 검출·비터비 옥타브 보정이 페이지 안에서 돌고, 음성은 기기를 떠나지 않으며 아무것도 저장하지 않는다. 방언 판정은 하지 않는 **측정기**. |
| `pyrrhus-co/` | 피로스 상사 | 유물 경매 심리전. 감정·위조·되사기가 얽힌 라운드제 게임, AI 상대 포함. |
| `indian-poker/` | 인디안 포커 | 자기 카드만 못 보는 베팅 게임. CFR로 뽑은 AI. |
| `nine-positions/` | 나인 포지션 | 9칸 동시 배치 심리전. |
| `rps/` | 가위바위보 예측기 | 사람의 패턴을 학습해 다음 수를 예측한다. |
| `animal/` | 동물 닮은꼴 찾기 | MediaPipe 얼굴 랜드마크 → 동물 12종 거리 점수. |

공통 규칙: 서버 없이 브라우저 안에서 전부 돌아간다. 로그인이 필요한 기능(기록 저장·랭킹)은 `auth-widget.js`가 붙여 주는 Supabase 세션을 쓴다.

## 공용 로그인 위젯

각 페이지 맨 끝에 이 한 줄을 넣으면 우상단에 로그인 버튼이 붙는다.

```html
<script src="/auth-widget.js" defer></script>
```

- 세션은 localStorage에 저장돼 도메인 안의 모든 페이지가 공유한다 (한 번 로그인하면 플레이하우스 전체에서 유지).
- `window.KYG_AUTH = { client, user, nickname }`로 현재 상태를 읽고, 로그인/로그아웃 시점을 잡으려면 `window.KYG_AUTH_LISTENERS.push(function(user, nickname, client){ ... })`.
- Supabase publishable key는 설계상 공개 키라서 저장소에 있어도 안전하다. **service_role 키는 절대 넣지 말 것.**

## 이중 언어(EN/KR) 시스템

각 페이지의 번역 대상 요소는 `class="tx"` + `data-en`/`data-kr` 속성을 갖고, 페이지 하단 공통 스크립트(Scramble)가 토글 시 한 글자씩 섞이며 전환한다. 새 콘텐츠를 추가할 때는:

```html
<p class="tx" data-en="English text" data-kr="한국어 텍스트">English text</p>
```

- **인라인 텍스트는 `data-en`과 글자 하나까지 똑같아야 한다.** 스크립트가 초기 로드 시(이미 영어일 때) `data-en`을 적용하지 않기 때문에, 다르면 영어 화면에서 옛날 문구가 그대로 남는다. 커밋 전에 두 값을 비교하는 스캔을 돌릴 것.
- 굵게(`<b>`) 등 태그가 섞인 문장은 태그 단위로 `.tx` 스팬을 쪼갠다 (data 속성 안에 HTML을 넣으면 깨짐).
- 고유명사(인명·곡명·회사명·기술 스택)는 번역하지 않는 것이 원칙.
- 앱 안에서 동적으로 만드는 문자열은 `window.APP_LANG`을 보고 고르고, 언어 전환 시 다시 그리려면 `window.APP_LANG_LISTENERS.push(relabel)`.

## CV 내용 수정 방법

1. `cv-source.html`(로컬 전용, 커밋 금지)을 열어 실제 이력 내용으로 수정
2. 터미널에서 실행:
   ```
   pip install cryptography        # 최초 1회
   python3 encrypt_cv.py "새암호"
   ```
3. 새로 생성된 `cv.html`만 커밋 & 푸시

민감 이미지(증명사진 등)는 `cv-source.html`에 평범하게 `<img src="private/photo.jpg">`로 쓰면 `encrypt_cv.py`가 base64로 변환해 암호화 결과물에 심는다. 이미지 파일 자체는 저장소에 올리지 말 것 (`private/` 폴더는 .gitignore 처리됨).

- 암호를 바꾸면 이전 암호는 즉시 무효. 이미 CV를 보낸 HR의 암호도 무효가 되니, 지원 시즌 단위 교체 권장.
- README에 실제 암호를 적지 말 것.

## 보안 주의사항

- `cv-source.html`을 실수로 커밋하면 git 히스토리에 영구히 남는다. 커밋 전 확인 습관.
- 이 방식(AES-256-GCM + PBKDF2 310,000회)은 소스를 봐도 내용을 알 수 없지만, 암호를 아는 사람의 재공유는 막을 수 없다.
- 저장소에 들어가도 되는 키는 공개 전제로 발급된 것뿐이다 (Supabase publishable key). 비밀 키·비밀번호는 비밀번호 관리자에.

## 배포

`main` 브랜치에 푸시하면 GitHub Pages(`pages-build-deployment` 액션)가 자동 배포한다. 보통 40~60초 소요. 커스텀 도메인(kygmin.com) DNS 설정은 프로젝트 문서 참고 (A 레코드 4개 + www CNAME, Enforce HTTPS 활성화됨).
