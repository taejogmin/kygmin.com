# KYGMIN.com

흑백 + 그린 네오브루탈리즘 테마의 개인 웹사이트. [kygmin.com](https://kygmin.com)에서 GitHub Pages로 서비스 중.

모든 페이지는 EN/KR 이중 언어를 지원한다 — 우하단 EN/한 토글 버튼이 텍스트 스크램블 애니메이션과 함께 언어를 전환한다.

## 저장소 구조

```
├── index.html                  # 홈 (학력·경력·활동·플레이그라운드·연락처)
├── cv.html                     # 암호 잠금 CV (암호화된 결과물)
├── cv-template.html            # CV 잠금 페이지 틀 (암호 입력 UI + 복호화 코드)
├── fmva-certificate.pdf        # FMVA 인증서 (cv.html 내부에서 링크됨 — 이동 금지)
├── fmva-transcript.pdf         # FMVA 성적표 (〃)
│
├── sound-of-hope.html          # [경력] 캄보디아 자선 콘서트 페이지
├── sound-of-hope/              #   └ 콘서트 이미지 (포스터·티켓·프로그램)
├── bridge-hackathon.html       # [경력] 브릿지 해커톤 — ClothesBridge 페이지
├── bridge-hackathon/           #   └ 해커톤 이미지 (와이어프레임·디자인·발표·인증서)
├── solution-challenge.html     # [경력] 구글 솔루션 챌린지 — Givplus 페이지
├── solution-challenge/         #   └ Givplus 이미지 (랜딩·지도·사이트맵·아키텍처 등)
│
├── animal/                     # [플레이그라운드] 동물 닮은꼴 찾기 (kygmin.com/animal/)
│   ├── index.html              #   MediaPipe 얼굴 분석, 100% 브라우저 내 처리
│   └── animals.json            #   동물 12종 라벨링 데이터 (백업용, 코드에는 인라인)
├── animal.html                 # 구주소 → /animal/ 리다이렉트 스텁
│
├── CNAME                       # 커스텀 도메인 (kygmin.com)
└── .gitignore                  # cv-source.html·encrypt_cv.py 커밋 제외
```

### 정리 원칙

- **HTML 페이지와 PDF는 루트에 둔다.** 페이지 URL은 이미 보낸 CV와 암호화된 `cv.html` 내부 링크에 박혀 있어 바꾸면 깨진다. 특히 `cv.html`은 암호 없이 내용 수정이 불가능하므로 그 안에서 링크되는 파일(`fmva-*.pdf`, 경력 페이지들)은 절대 이동하지 말 것.
- **이미지·데이터는 프로젝트별 폴더에 넣는다.** 새 프로젝트를 추가할 때도 같은 패턴: `프로젝트명.html`(루트) + `프로젝트명/`(에셋 폴더). 플레이그라운드형 미니앱은 `animal/`처럼 폴더 안에 `index.html`로 넣으면 `kygmin.com/폴더명/`으로 서비스된다.

## 이중 언어(EN/KR) 시스템

각 페이지의 번역 대상 요소는 `class="tx"` + `data-en`/`data-kr` 속성을 갖고, 페이지 하단 공통 스크립트(Scramble)가 토글 시 한 글자씩 섞이며 전환한다. 새 콘텐츠를 추가할 때는:

```html
<p class="tx" data-en="English text" data-kr="한국어 텍스트">English text</p>
```

굵게(`<b>`) 등 태그가 섞인 문장은 태그 단위로 `.tx` 스팬을 쪼갠다 (data 속성 안에 HTML을 넣으면 깨짐). 고유명사(인명·곡명·회사명·기술 스택)는 번역하지 않는 것이 원칙.

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

## 배포

`main` 브랜치에 푸시하면 GitHub Pages(`pages-build-deployment` 액션)가 자동 배포한다. 보통 40~60초 소요. 커스텀 도메인(kygmin.com) DNS 설정은 프로젝트 문서 참고 (A 레코드 4개 + www CNAME, Enforce HTTPS 활성화됨).
