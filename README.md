# Next.js 실습해보기

## 프론트엔드 개발자 정덕우

<br>

## Next.js 공식문서 보면서 따라하기.

<hr>

[Next.js 공식페이지](https://nextjs.org/)

<br>

### Next.js 프로젝트 생성

<hr>

`npx create-next-app "경로' --use-npm 으로 프로젝트 생성`

- --use-npm 을 작성하지 않으면 yarn으로 생성됨.
- 경로로 들어 간 후 `npm run dev` 로 localhost:3000 에 현재 작업상황을 확인할 수 있음
  - npm run dev : 개발환경 실행
  - npm run build : 배포파일 생성
  - npm run start : 서비스 시작

### Next.js 페이지 생성하기

<hr>

`pages 폴더 내에 폴더 또는 파일을 추가하여 원하는 경로의 페이지를 추가`

- pages폴더 하부에 posts 폴더를 추가한 후 그 내부에 first-post.js 파일을 추가하면 기본 url(localhost:3000/)에 추가적으로 /post/first-post 페이지가 추가된다.

- post 폴더 내부에 index.js 파일을 생성하게되면 /post 경로의 페이지가 생성된다

### CSS 적용하기

<hr>

`동일 폴더 안에 CSS 파일을 추가한 후 해당 컴포넌트에서 import 해서 사용`

- css 파일 이름은 파일명.modules.css 로 작성해주어야 css 를 적용할 수 있다.
- public 폴더 내 image 폴더에 image 파일을 저장하여 해당 경로의 이미지를 사용할 수 있다.
- html의 image 태그가 아닌 next에서 제공하는 Image 태그를 활용하는것이 좋다 (lazy-loading)

### styled-components 적용해보기

<hr>

`react에서는 style-components 라이브러리만 설치해주었으면 되었으나 Next에서는 babel plugin도 함께 설치해주어야 한다.`

- babel 플러그인 설치 없이 style-components만 사용하는 경우에는 SSR을 하면서 html이 먼저 노출 된 후에 css 파일이 나중에 적용되기 때문에 화면이 깜빡거리는듯한 현상이 생긴다.
- 최상단 폴더에 .babelrc 파일 생성 후 babel 설정을 해주고 pages 폴더내에 \_document.js 파일을 생성하여 css파일을 불러와 덮어주도록 설계해준다.
