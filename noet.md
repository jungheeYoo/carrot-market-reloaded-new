# 캐럿마켓 클론코딩

## Set up (셋업하기)

- 원하는 루트 폴더에 명력어 입력
- 설치 실행하고 폴더명 정해줌

```
npx create-next-app@latest
```

- 해당 폴더로 이동 후 페이지 실행

```
npm run dev
```

- page 파일로 가서 return 안에 내용 삭제 main 만 남겨둠
- import Image from 'next/image'; 삭제
- globals.css 내용 삭제 얘만 남겨둠

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- 깃허브와 연동

```
git remote add origin [레포 주소]
```

- tailwind.config.ts 파일에서 삭제

```
extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
```

<br/>
<br/>
<br/>

---

## 자동완성 강제로 불러오는 방법

- Ctrl + Space
  <br/>
  <br/>
  <br/>

---

## Ring Width

- 박스 그림자를 사용하여 아웃라인 링을 생성하는 유틸리티
