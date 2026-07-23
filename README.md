# KYGMIN.com

흑백 + 그린 네오브루탈리즘 테마의 개인 웹사이트.

## 파일 구성

| 파일 | 역할 | 커밋 여부 |
|---|---|---|
| `index.html` | 공개 홈 (홈/포트폴리오/프로젝트/연락처) | O |
| `cv.html` | 암호 잠금 CV 페이지 (암호화된 결과물) | O |
| `cv-template.html` | 잠금 페이지 틀 (암호 입력 UI + 복호화 코드) | O |
| `cv-source.html` | **CV 원본 (민감 정보)** | **X — 절대 커밋 금지** |
| `encrypt_cv.py` | 암호화 도구 | X 권장 |
| `.gitignore` | 위 두 파일을 자동으로 커밋에서 제외 | O |

## CV 내용 수정 방법

1. `cv-source.html`을 열어 실제 이력 내용으로 수정
2. 터미널에서 실행:
   ```
   pip install cryptography        # 최초 1회
   python3 encrypt_cv.py "새암호"
   ```
3. 새로 생성된 `cv.html`만 커밋 & 푸시

### 민감 이미지 넣기 (증명사진 등)

`cv-source.html` 안에 평범하게 이미지 태그를 쓰면 됩니다:

```html
<img src="private/photo.jpg" alt="profile" />
```

`encrypt_cv.py`가 실행될 때 로컬 이미지 파일을 자동으로 base64로 변환해
HTML 안에 심은 뒤 통째로 암호화합니다. **이미지 파일 자체는 저장소에 올릴
필요가 없고, 올리면 안 됩니다.** 민감 이미지는 `private/` 폴더에 두세요
(.gitignore가 자동으로 커밋에서 제외).

- 외부 URL(`https://…`)이나 이미 `data:`로 시작하는 src는 건드리지 않음
- 500KB 초과 이미지는 경고가 뜹니다 — 증명사진은 200~300KB 이하 권장
- 로고·파비콘 같은 **공개용** 이미지는 반대로 그냥 저장소에 파일로 올리면 됨

암호는 encrypt_cv.py 실행 시 지정합니다. (README에 실제 암호를 적지 말 것)

암호를 바꾸면 이전 암호는 즉시 무효가 됩니다. 이미 CV를 보낸 HR의 암호도 무효가 되니, 지원 시즌 단위로 교체하는 것을 권장.

## 배포 (GitHub Pages)

1. GitHub에서 새 public 저장소 생성 (예: `kygmin-site`)
2. 이 폴더의 파일 업로드 (`cv-source.html`, `encrypt_cv.py` 제외 — .gitignore가 자동 처리)
3. 저장소 Settings → Pages → Source: `main` 브랜치 선택
4. Settings → Pages → Custom domain에 `kygmin.com` 입력
5. 도메인 업체 DNS 설정에서:
   - A 레코드 4개: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME 레코드: `www` → `<깃허브아이디>.github.io`
6. DNS 전파(수 분~수 시간) 후 Pages 설정에서 Enforce HTTPS 체크

## 보안 주의사항

- `cv-source.html`을 실수로 커밋하면 git 히스토리에 영구히 남습니다. 커밋 전 `git status`로 확인하는 습관.
- 이 방식(AES-256-GCM + PBKDF2 310,000회)은 소스를 봐도 내용을 알 수 없지만, 암호를 아는 사람의 재공유는 막을 수 없습니다.
- 암호는 추측이 어렵게: 이름/도메인/생년 조합은 피할 것.

## index.html에서 채워야 할 것

- 경력 연도 (`20XX`)
- LinkedIn / GitHub 실제 주소 (`yourhandle`)
- 히어로 소개 문구 (원하면)
