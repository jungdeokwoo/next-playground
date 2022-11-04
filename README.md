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

#### **preRendering**

- 기존 리엑트의 경우에는 html, js 모두 받아와서 화면에 보여지도록 함 (개발자도구에서 자바스크립트를 disable로 하면 화면이 나타나지 않음)
- Next의 경우에는 서버에서 html을 받아와서 기본적인 html을 화면에 나타내고 javascript를 추후에 받아오면서 페이지에 적용시킴(hydration)
- Static Generation의 경우 build시점에서 Html을 생성하고 요청에 따라 재사용하는 방식
- Server-side Rendering 의 경우 요청이 생길때 Html을 생성해서 보여주는 방식
- getStaticProps를 통해 현재 preRendering될 페이지에 data dependencies를 주어 우선적으로 데이터를 받아오도록 한다.

<br/>

#### **Static Generation**

- static Generation 의 경우 데이터의 변화가 바로바로 일어나져서 보여지는 페이지의 UI가 계속 해서 변해지지 않는 페이지들을 build 시점에 그려내어 사용자가 빠르게 페이지를 확인할 수 있도록 한다.
- component가 아닌 page 파일에 getstaticProps 함수를 export 해주어 정적페이지를 생성할 수 있다.
- 외부 데이터를 받아와야하는 경우 fetch 함수를 getStaticProps 함수 내부에서 fetch하여 {prop:{}}형식으로 return 해주게 되면 해당 페이지의 함수 컴포넌트에서 prop으로 받아올 수 있다.
- 내부 API를 사용하는 경우 개발환경에서는 작동을 하지만 build하여 prod환경에서 작동하려면 build 시점에 오류가 생성되어 build를 할 수 없다.(이유는 찾고있는중..)

  - 빌드시점에 local 서버가 생성되지 않기 때문에 fetch할수 없기때문 (추측)
  - getStaticProps 자체가 외부데이터만을 이용해서 작동하기 때문 (추측)

- dynamic Route의 경우 미리 페이지를 생성하여 정적페이지를 만들기위해서는 getStaticPaths를 통해 지정된 경로의 페이지를 미리 생성해 둘 수 있다.
- getStaticPaths 의 경우 {paths:[{params:{`endpoint`: `값(string}`}}]} 형식으로 return 해주어야 하고 값은 항상 string 으로 넘겨주어야 한다.
- getStaticPaths의 리턴값은 getstaticProps에서 props로 전달받을 수 있다.
- 정적페이지로 생성된 페이지의 경우 외부데이터를 이용해서(fetch) 페이지를 만들었지만, build시점에만 fetch를 하기때문에 해당페이지를 들어갔을때 외부 데이터 fetch가 이루어지지 않는다.
- getStaticPaths 의 paths의 배열 endpoint에 속해있지 않는 endpoint의 경로로 이동하였을때 fallback값이 false 일 경우에는 404페이지를 띄우게 되고, true일 경우에는 정적페이지를 생성하듯 페이지를 만들어서 그려주고 난 후에 정적페이지처럼 작동하게 된다.(build된 폴더 내부애 html이 생성된다.)

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

<br>

#### **Serverside-Rendering**

- Next.js에서도 서버사이드 렌더링을 제공해준다.
- getServersideProps() 를 활용하여 서버사이드 렌더링을 구현할 수 있다.
- getServersideProps() 를 사용하는 경우 매 요청마다 서버에서 html을 만들어서 넘겨주는 방식으로 렌더링 된다.
- 외부데이터를 사용하는경우 마찬가지로 getServersideProps 함수 내부에서 fetch를 해오는 방식으로 구현할 수 있으며 return 값으로는 마찬가지로 {props:} 로 넘겨줄 수 있다.
- 동적라우팅의 경우에는 getServersideProps 의 매개변수로 context를 받아올 수 있으며 context는 params,query,res,req 등 여러가지 키값을 가지는 객체 데이터이다.
- res.setHeaders('Set-Cookie', 값) 을 통해 쿠키를 저장할 수 있고, req.headers.cookie를 통해 쿠키값을 확인할 수 있다.
- params는 페이지 경로 ( [`경로`].js 에서의 경로 / `ex) productId/455 에서 params는 455`) query는 엔드포인트의 값들을 객체로 받아올 수 있다. (`ex) productId/455?a=1&b=2 에서 query값은 {productId:'455', a: '1', b:'2'}`)

`Static generation과 SSR의 비교해보면, 각 페이지에서 new Date()를 활용하여 현재시간을 페이지에 나타내 보았을때 SSG페이지의 경우 빌드한 시점의 시간이 나타나며, 새로고침을 하여도 시간의 변화가 생기지 않는다.`

<br>

`단 getStaticProps의 return 값으로 revalidate를 적용하게 되면 적용한 시간 안에 새로고침을 하면 페이지는 받아온 정보를 계속 보여주지만, 해당 시간이 지나면 다시 서버에서 정보를 받아와서 페이지를 보여주기때문에 시간정보가 변경되어 있다.`

<br>

`SSR의 경우에는 요청마다 서버에서 html을 작성하고 받아오기 때문에 페이지에 접속할때마다 현재시간이 변경되어 나타나게 된다.`

  <br/>
  <br/>

#### **Incremental Static Regeneration**

- getStaticProps 의 return 값의 키값으로 revalidate를, 값으로 시간(초) 를 적어주면, 해당 초 이후에 정적페이지가 업데이트가 되게 된다.
- getStaticProps 로 만들어진 정적페이지는 추후에 서버의 데이터가 변경되어도 변경된값이 생성된 페이지에 적용되지 않는다.(아무리 새로고침을 하여도)
- revalidate를 10으로 설정하게 된다면 처음 생성된 정적페이지에서 10초후에 새로고침을 하게되면, 바로 화면이 변경되는게 아니라, 설정된 값 이후에 들어오는 요청에 대하여 일단은 기존의 캐쉬된 페이지를 보내주고, 그 후에 새로운 데이터를 받아와서 정적페이지를 새로 만들고 그 새로만든 html을 캐쉬에 저장하여 그 다음 요청부터 새로운 페이지가 보여지게 된다.
- revalidate의 값은 해당 시간뒤에 바로 변경된 페이지가 보여지기 보다는 해당 시간 후의 요청마다 새로운 정적페이지를 생성하여 캐쉬해둔다 라고 생각하면 될 것 같다.

  <br/>
  <br/>

### **Nested Routing**

<hr>

`pages 폴더내에 하위 폴더를 만든 후 [id].js 가 아닌 [폴더명]으로 추가적인 nesting을 할 수 있다.`

- pages 폴더내부에 product라는 폴더를 만들고 index.js파일을 생성하면 /product 페이지에 접근할 수 있다.
- product 폴더 내부에 [productId]라는 폴더를 만들고 index.js파일을 만들어주면 index.js파일에 해당하는 내용을 /product/[productId]페이지에 나타내어진다.
- [productId] 폴더 내부에 추가적인 폴더를 만들면 해당폴더내에 [id].js 파일을 작성해주면 /product/[productId]/'폴더명'/[id] 페이지로 접근할 수 있다.

  <br/>
  <br/>

### **CatchAll Route**

<hr>

- pages 폴더내부에 임의의 폴더를 만들고 그 아래에 [...파일명].js 파일을 만들어주게되면 임의의 폴더명을 포함하는 모든 경로에 접속할 수 있다.(마찬가지로 모든 경로의 화면은 [...파일명].js 내용을 가져온다)
- [...파일명].js 의 경우 모든 경로에서 useRouter 를 사용해서 페이지 정보를 가져올때 query는 배열값이 들어가게 된다. ('/폴더명/a/b' 의 경우 query 값이 {파일명 : ['a' , 'b']} 이렇게 들어오게된다.)
- useRouter()를 활용하여 query 값을 가져올때 첫 렌더링에서는 query 값이 undefined가 들어오게 되기 때문에 구조분해 할당을 따로 해주어 `const {파일명 = []} = router.query`
  이런식으로 초기값을 빈배열로 넘겨주어야 syntax error 가 나오지 않는다.

  <br/>
  <br/>

### **Navigate**

<hr>

`next에서 제공하는 Link 태그 또는 라우터의 push 를 통해 원하는 페이지로 이동시킬 수 있다.`

#### Link

- Link태그 내부에 `<a>` 태그 사이에 텍스트를 넣어서 링크를 넣어줄 수 있다.
- Link 태그의 href 속성을 이용하여 원하는 페이지로 이동시킬 수 있다.
- nesting의 경우 만들어진 페이지는 하나이고 이동되어야 하는페이지가 여러개일때 useRouter를 활용했던 것 처럼 하부페이지로 이동후 그페이지에서 또 이동을 할때는 useRouter의 asPath를 활용하면 현재페이지의 주소를 가져올 수 있기때문에 편리하다.
- replace 속성의 경우에는 뒤로가기가 되지 않는다(history에서 가야할 페이지를 추가하는게 아니라 현재페이지에다가 가야 할 페이지를 덮어쓴다는 개념 )

#### router

- 버튼이나 특정상황에서 바로 navigation을 시켜야 할 경우에는 const router = useRouter(); router.push('경로') 형식으로 navigating 한다.
- router.replace('경로')의 경우에는 Link의 replace 속성과 동일하다.
