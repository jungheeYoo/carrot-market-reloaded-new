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
  <br/>
  <br/>
  <br/>

---

## gradient

- bg-gradient-to-tr from-cyan-500 via-yellow-400 to-purple-400
  <br/>
  <br/>
  <br/>

---

## invalid

- 브라우저가 유효하지 않다고 판단하는 입력 값에 대해 작동
  <br/>
  <br/>
  <br/>

---

## peer

- 형제 상태에 따른 스타일 지정(peer-{modifier})
- 형제 요소의 상태에 따라 요소의 스타일을 지정해야 하는 경우 형제를 peer 클래스로 표시하고 peer-invalid와 같은 peer-\* 수정자를 사용하여 대상 요소의 스타일을 지정한다.
- 만약 peer가 유효하지 않다면, peer는 현재 입력 값
- peer-invalid:bg-red-100 class 를 갖고 있는 형제를 선택해서 배경색을 지정한다
  \*\*주의
  CSS에서 후속 형제 결합자(Subsequent-sibling combinator)가 작동하는 방식 때문에 peer 마커는 이전 형제에서만 사용할 수 있다는 점을 유의하기

```
// 작동하지 않습니다. 이전 형제 자매만 peer로 표시될 수 있습니다.
// input이 span보다 앞에 있어야 함
< label >
< span class="peer-invalid:text-red-500 ..." >Email< /span >
< input type="email" class="peer ..."/ >
< /label >
```

  <br/>
  <br/>
  <br/>

---

## 자식 선택자

- [*:]
- 부모 컨테이너 안에 있는 모든 자식 객체에 스타일 적용

- has
- 해당 컨테이너에서 특정 조건을 만족하는 자식을 확인
