# 적룡(赤龍) · Crimson Loong 한국어판

원본: [ChetasLua/crimson-loong](https://github.com/ChetasLua/crimson-loong) · 데모: [chetaslua.github.io/crimson-loong](https://chetaslua.github.io/crimson-loong/)

이 저장소는 원작 데모의 **화면에 보이는 문구를 한국어로 바꾼 오버레이**입니다. 원작 파일 index.html은 그대로 두고, 표시 시점에 문구만 바꿉니다. 영문 안내는 [README.en.md](README.en.md)에 있습니다.

- 언어 전환: 우측 상단 버튼(English / 한국어). 주소에 `?lang=en` 또는 `?lang=ko`를 붙이면 해당 언어로 열립니다. 선택은 브라우저에 저장됩니다.
- 번역 방식: 원문을 사전(`i18n/ko.json`)의 키로 보존하고, 페이지의 텍스트를 표시될 때 치환합니다. index.html에는 `<script src="ko-overlay.js"></script>` 한 줄만 추가했습니다.
- 용어 기준: [docs/glossary.md](docs/glossary.md)
- 외부 폰트, 분석, 외부 서버 호출은 없습니다. 같은 저장소의 `i18n/ko.json`만 추가로 읽습니다. 서비스워커와 오프라인 캐시는 없습니다.
- 한계: 게임 안에 보이는 짧은 문구(약 25개)만 번역했습니다. 원작 README 같은 문서는 번역하지 않았습니다. 사전을 읽지 못하면(예: 파일을 디스크에서 직접 열 때) 영문으로 보입니다. 로딩 중 잠깐 영문이 보일 수 있습니다.

## 라이선스 안내

원본 저장소 ChetasLua/crimson-loong에는 프로젝트 라이선스가 명시되어 있지 않습니다. 원본 README가 밝히는 것은 three.js(MIT) 사용뿐입니다. 이 번역본은 원작자의 명시적 허락 없이 만든 비공식 번역입니다. 원작자나 권리자가 요청하면 이 저장소를 **요청 시 삭제**합니다.

## 배포

GitHub Pages: https://sigco3111.github.io/crimson-loong-ko/
