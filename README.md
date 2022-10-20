# Next.js 실습해보기

## 프론트엔드 개발자 정덕우

<br>

## Next.js 공식문서 보면서 따라하기.

<hr>

[Next.js 공식페이지](https://nextjs.org/)

<br>

### **Next.js 프로젝트 생성**

<hr>

`npx create-next-app "경로' --use-npm 으로 프로젝트 생성`

- --use-npm 을 작성하지 않으면 yarn으로 생성됨.
- 경로로 들어 간 후 `npm run dev` 로 localhost:3000 에 현재 작업상황을 확인할 수 있음

  - npm run dev : 개발환경 실행
  - npm run build : 배포파일 생성
  - npm run start : 서비스 시작

  <br/>
  <br/>

### **Next.js 페이지 생성하기**

<hr>

`pages 폴더 내에 폴더 또는 파일을 추가하여 원하는 경로의 페이지를 추가`

- pages폴더 하부에 posts 폴더를 추가한 후 그 내부에 first-post.js 파일을 추가하면 기본 url(localhost:3000/)에 추가적으로 /post/first-post 페이지가 추가된다.

- post 폴더 내부에 index.js 파일을 생성하게되면 /post 경로의 페이지가 생성된다

  <br/>
  <br/>

### **CSS 적용하기**

<hr>

`동일 폴더 안에 CSS 파일을 추가한 후 해당 컴포넌트에서 import 해서 사용`

- css 파일 이름은 파일명.modules.css 로 작성해주어야 css 를 적용할 수 있다.
- public 폴더 내 image 폴더에 image 파일을 저장하여 해당 경로의 이미지를 사용할 수 있다.
- html의 image 태그가 아닌 next에서 제공하는 Image 태그를 활용하는것이 좋다 (lazy-loading)

  <br/>
  <br/>

### **styled-components 적용해보기**

<hr>

`react에서는 style-components 라이브러리만 설치해주었으면 되었으나 Next에서는 babel plugin도 함께 설치해주어야 한다.`

- babel 플러그인 설치 없이 style-components만 사용하는 경우에는 SSR을 하면서 html이 먼저 노출 된 후에 css 파일이 나중에 적용되기 때문에 화면이 깜빡거리는듯한 현상이 생긴다.
- 최상단 폴더에 .babelrc 파일 생성 후 babel 설정을 해주고 pages 폴더내에 \_document.js 파일을 생성하여 css파일을 불러와 덮어주도록 설계해준다.

  <br/>
  <br/>

### **data-Fetching**

<hr>

`Next에서는 Static Generation,Server-Side Rendering 두가지 PreRendering 방식을 제공함`

#### preRendering

- 기존 리엑트의 경우에는 html, js 모두 받아와서 화면에 보여지도록 함 (개발자도구에서 자바스크립트를 disable로 하면 화면이 나타나지 않음)
- Next의 경우에는 서버에서 html을 받아와서 기본적인 html을 화면에 나타내고 javascript를 추후에 받아오면서 페이지에 적용시킴(hydration)
- Static Generation의 경우 build시점에서 Html을 생성하고 요청에 따라 재사용하는 방식
- Server-side Rendering 의 경우 요청이 생길때 Html을 생성해서 보여주는 방식
- getStaticProps를 통해 현재 preRendering될 페이지에 data dependencies를 주어 우선적으로 데이터를 받아오도록 한다.

  <br/>
  <br/>

#### dynamic-routes

- 같은 경로의 하위페이지(/posts/1, /posts/2)의 경우에는 pages폴더내에 상위경로의 폴더 내부에 [id].js 형식의 파일을 생성하여 라우팅해준다.
- 마찬가지로 build 시점에 data fetching 이 필요한 경우에는 getStaticProps를 활용하여 build 시점에 데이터를 fetch하여 정적인 페이지를 생성하도록 한다.
- dynamic-route의 경우에는 getStaticProps와 동적라우팅 페이지에서 getStaticPaths를 활용해서 build시에 static하게 생성할 페이지를 정한다.
- 개발환경에서는 getStaticPath는 매 요청마다 실행되지만 production(생성)환경에서는 build time에서만 실행된다.
- getStaticPaths 에 해당하지 않는 경로는 404에러 페이지를 띄워준다
  - fallback 속성이 false일때는 404에러 페이지를 띄워준다
  - fallback 속성이 true 일때는 지정된 페이지를 띄워준다.
- useRouter 을 통해서 해당페이지의 route 정보를 확인 할 수 있다.(`const router = useRouter()`)
- pages 폴더내에 404.js파일을 생성하면 404에러경우에 이동할 페이지를 편집할 수 있다.

  <br/>
  <br/>

### **Nested Routing**

<hr>

`pages 폴더내에 하위 폴더를 만든 후 [id].js 가 아닌 [폴더명]으로 추가적인 nesting을 할 수 있다.`

- pages 폴더내부에 product라는 폴더를 만들고 index.js파일을 생성하면 /product 페이지에 접근할 수 있다.
- product 폴더 내부에 [productId]라는 폴더를 만들고 index.js파일을 만들어주면 index.js파일에 해당하는 내용을 /product/[productId]페이지에 나타내어진다.
- [productId] 폴더 내부에 추가적인 폴더를 만들면 해당폴더내에 [id].js 파일을 작성해주면 /product/[productId]/'폴더명'/[id] 페이지로 접근할 수 있다.
