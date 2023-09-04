<p align="center">

![image](https://github.com/H14-Capsule/capsule-client/assets/109677566/aa87ebff-6afc-4086-8615-a9d8726407ca)

</p>

<br/><br/>

# **🎯프로젝트 소개**

<table>
  <tr>
    <th></th>
    <th>✨ Version 2️ ✨</th>
    <th>Version 1️</th>
  </tr>
  <tr>
    <td>팀원 구성</td>
    <td>FE 1,BE 1</td>
    <td>FE 1,BE 1</td>
  </tr>
  <tr>
    <td>구현 기간</td>
    <td><b>23.07.07 ~ 23.07.09 </b></td>
    <td>23.03.15 ~ 23.04.02 </td>
  </tr>
  <tr>
    <td>관련 링크</td>
    <td>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/H14-Capsule/newClientCapsule">refactoring branch</a>
      <i style="color: gray;">(← click!)</i>
    </td>
    <td>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/H14-Capsule/capsule-client">before_main branch</a>
      <i style="color: gray;">(← click!)</i>
    </td>
  </tr>
</table>

<br/>

    ✨  React 학습 전 혼자 강의보며 연습삼아 강의보면서 만들어서 구현에만 급급했던 코드와
        유지보수성을 고려한 코드의 차이점을 직접 비교해보기 위해 v2를 만들었습니다.

<br/><br/>

# **🛠️ 사용기술**

<table>
  <tr>
    <th>구분</th>
    <th>✨ Version 2️ ✨</th>
    <th>Version 1️</th>
  </tr>
  <tr>
    <td>Library</td>
    <td>
      <img src="https://img.shields.io/badge/React-5DC1DA?style=for-the-badge&logo=React&logoColor=white" alt="React">
    </td>
    <td>
      <img src="https://img.shields.io/badge/React-5DC1DA?style=for-the-badge&logo=React&logoColor=white" alt="React">
    </td>
  </tr>
  <tr>
    <td>Programming Language</td>
    <td>
      <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="JavaScript">
    </td>
    <td>
      <img src="https://img.shields.io/badge/JavaScript-F7E025.svg?style=for-the-badge&logo=JavaScript&logoColor=white" alt="JavaScript">
    </td>
  </tr>
  <tr>
    <td>Styling</td>
    <td>
      <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled-Components">
    </td>
    <td>
      <img src="https://img.shields.io/badge/CSS3-4169E1.svg?style=for-the-badge&logo=CSS&logoColor=white" alt="CSS3">
    </td>
  </tr>
  <tr>
    <td>State Management</td>
    <td>
      <img src="https://img.shields.io/badge/recoil-5D4EFF?style=for-the-badge&logo=Recoil&logoColor=white" alt="Recoil">
      <img src="https://img.shields.io/badge/tanstack--query-FF4759?style=for-the-badge&logo=react-query&logoColor=white" alt="Tanstack-Query">
    </td>
        <td>
      <img src="https://img.shields.io/badge/fetch-2C2C2C?style=for-the-badge&logo=fetch&logoColor=white" alt="fetch">
    </td>
  </tr>
  <tr>
  <tr>
    <td>Formatting</td>
    <td>
      <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="Prettier">
    </td>
    <td>
      <img src="https://img.shields.io/badge/Not--used-FFF.svg?style=for-the-badge" alt="Not used">
    </td>
  </tr>
  <tr>
    <td>Version Control</td>
    <td><img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git"> <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></td>
    <td><img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git"> <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></td>
  </tr>
</table>

<br/><br/>

# 💭 기술적 의사결정

<br/>

<details>
  <summary>
    &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled-Components">
  </summary>
  <br/>

    Styled-Components는 CSS-in-JS이므로 컴포넌트 단위로 스타일을 관리할 수 있으며
    JavaScript 표현식을 이용해 컴포넌트의 상태나 데이터에 따라 스타일을 동적으로 변경할 수 있습니다.

    또한 인라인으로 className이나 id로 스타일을 주는 것 보다 더 깔끔하며 react 공부를 하면서
    꾸준히 사용했던 경험이 있으므로 빠른 구현을 위해 Styled-Components를 선정하였습니다.

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/recoil-5D4EFF?style=for-the-badge&logo=Recoil&logoColor=white" alt="Recoil">
  </summary>
  <br/>

    ver.1의 기존 코드는 storage에만 편지내용을 저장해서 편지내용이 초기화되는걸 방지했었습니다.

    ver.2를 새롭게 구현하며 react스러운 코드를 작성하고 싶었으며 atom을 기반으로 한 상태관리의 학습을
    위해 Recoil을 선정하였습니다.

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/tanstack--query-FF4759?style=for-the-badge&logo=react-query&logoColor=white" alt="Tanstack-Query">
  </summary>
  <br/>

    ver.1에서는 fetch를 이용해서 서버와 API통신을 했었는데
    ver.2에서는 코드를 좀 더 간결화하고 가독성있으며 유지보수에 용이한 Axios를 사용하였고
    캐싱처리인 이전의 데이터나 리소스를 임시로 저장해 다음 요청 시 저장된 데이터를 사용함으로써
    서버 부하를 줄이고 성능을 향상시키므로, 이러한 기능을 지원하는 Tanstack-Query를 함께 사용했습니다.

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="Prettier">
  </summary>
  <br/>

    설정해둔 컨벤션을 준수하고 있는지 체킹해주는 Prettier를 지정하여 코드 컨벤션을 일관성있게 \
    유지하기 위해 사용하였습니다.

  <br/>
</details>

<br/><br/>

<!-- # 👀 기능 미리보기

### 📌 ID 중복체크

  <img src="https://github.com/Be-log/be-log/assets/84097192/3a12b7d1-7e3e-491e-aa40-c9b4d5f90eda" alt="이미 존재하는 아이디" width="800" />

- 입력한 ID가 DB에 존재하는지 중복 체크를 진행해 중복일 경우 에러 메세지를 출력했고,
<br/>동시에 ID input을 초기화시켜 사용자가 명시적으로 알 수 있도록 구현하였습니다.

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b style="font-size: 22px;">💡 로그인</b>
  </summary>

### 📌 ID/PWD 유효성 검사

  <table>
    <tr>
      <th>ID 유효성 검증</th>
      <th>PWD 유효성 검증</th>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/Be-log/be-log/assets/84097192/78a021d1-3d07-4b0e-b0cc-936b5c9a153a" alt="ID 유효성 검증" width="500" />
      </td>
      <td>
        <img src="https://github.com/Be-log/be-log/assets/84097192/61343e23-08aa-4cab-b17a-9c0b74ee2ac3" src="PWD 유효성 검증" width="500" />
      </td>
    </tr>
  </table>

- 입력한 ID/PWD가 DB에 존재하지 않는다면 에러 메세지를 출력하고,
  <br/>해당하는 input을 초기화하여 사용자가 명시적으로 알 수 있도록 하였습니다.

- 입력한 비밀번호 값 역시 bcrypt를 이용해 암호화된 값이 일치하는지 확인하였습니다.

  <br/>

### 📌 로그아웃 시 저장된 데이터/토큰 초기화

  <img src="https://github.com/Be-log/be-log/assets/84097192/8e09e43c-e0fd-4c35-97a1-53b99d06b2be" alt="로그인아웃 토큰" width="800" />

- 로그인 시 값이 모두 일치할 경우하여 로그인에 성공했을 경우만 jwt 토큰을 발급하였습니다.

- 서버에서 발급한 토큰은 react-cookie 라이브러리를 이용해 cookie에 저장하고,
  <br/> response로 받은 id와 nickname은 Local Storage에 저장하였습니다.

- 로그아웃 시 unset_jwt_cookies로 발급한 토큰을 삭제하고,
  <br/> 해당 요청이 성공했을 경우 클라이언트에서도 cookie와 storage에 저장된 값을 삭제하였습니다.

  <br/>

### 📌 JWT 토큰을 이용한 인증/인가 처리

  <img src="https://github.com/Be-log/be-log/assets/84097192/ac03e7ac-b484-4b48-8314-5bae3ecf1d80" alt="글 작성 인증" width="800" />

- 모든 화면에 공통적으로 출력되는 Header에서 useEffect를 통해 렌더링이 될 때마다
  <br/>storage와 cookie에 있는 값이 유효한지 검증할 수 있도록 하였습니다.

- 사용자가 하나라도 데이터를 임의로 삭제했을 경우 유효하지 않다는 alert를 보내고
  <br/>로그아웃 될 수 있도록 구현하였습니다.

- 게시글 작성 시에는 모든 토큰과 저장된 값이 유효한지 먼저 체크했고,
<br/>작성 도중 로그아웃하거나 정보를 임의 삭제할 때도 해당 인가가 유효하지 않도록 처리했습니다.

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b style="font-size: 22px;">💡 게시글</b>
  </summary>

### 📌 게시글 작성 및 입력값 유효성 검사

  <table>
    <tr>
      <th>마크다운을 이용한 게시글 작성</th>
      <th>게시글 작성 유효성 검사</th>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/Be-log/be-log/assets/84097192/c8738fda-5b6e-4018-988d-b840e08b7631" alt="마크다운을 이용한 게시글 작성" width="500" />
      </td>
      <td>
        <img src="https://github.com/Be-log/be-log/assets/84097192/3a03cdf8-0887-4a94-8b55-0b8a12662c24" src="게시글 작성 유효성 검사" width="500" />
      </td>
    </tr>
  </table>

- react-md-editor를 이용해 마크다운으로 게시글을 작성 및 출력할 수 있도록 구현하였습니다.

- 작성 API 호출 전 모든 입력값이 존재하는지 유효성 검증을 진행했습니다.

- 특히 썸네일을 담당하는 이미지 URL의 경우 값을 입력할 때마다
  <br/>new Image()의 이미지 객체를 이용해 해당 url로 이미지를 로딩할 수 있는지 체크하여
  <br/>유효하지 않은 이미지 URL값의 입력을 제한했습니다.

- 사용자가 게시글 작성 페이지에 진입했을 때 바로 토큰과 저장된 정보를 체크하여
  <br/>토큰 및 정보가 유효하지 않을 경우에도 로그아웃 처리를 진행하지만,
  <br/>서버단 코드에서도 사용자가 작성 시 보낸 토큰과 DB에 존재하는 유저 정보를 대조하여
  <br/>유효한 토큰으로 접근하고 있는지, 해당 토큰에 저장된 값이 존재하는지 이중으로 인가를 확인했습니다.

- 페이지 진입 시 게시글 작성인지, 수정인지 넘어오는 데이터를 통해 확인하여
  <br/>게시글 작성, 수정 두 개의 기능을 한 개의 컴포넌트로 재사용하였습니다.

   <br/>

### 📌 게시글 수정/삭제

  <table>
    <tr>
      <th>게시글 수정</th>
      <th>게시글 삭제</th>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/Be-log/be-log/assets/84097192/dec581de-a463-4649-930a-595702cb10b3" alt="게시글 수정" width="500" />
      </td>
      <td>
        <img src="https://github.com/Be-log/be-log/assets/84097192/a0856c82-96db-4681-862b-12b9bbf994da" src="게시글 삭제" width="500" />
      </td>
    </tr>
  </table>

- 게시글 수정, 삭제는 로그인 후 storage에 저장된 id값과 게시글 작성자의 id값을 비교하여
  <br/>일치할 경우에만 수정, 삭제 버튼이 출력되도록 하였습니다.

- 게시글 수정 시에는 useLocation의 state를 이용해 기존 데이터를 수정 페이지로 넘겨주었으며,
  <br/>설정한 flag값으로 작성, 수정 기능을 구분하여 한 개의 컴포넌트를 재사용하였습니다.

- 게시글 삭제 후에는 메인페이지로 랜딩시킴과 동시에
  <br/>invalidateQueries를 이용해 삭제된 내역이 반영되어 다시 보여질 수 있도록 하였습니다.

- 수정, 삭제에도 서버로 넘어오는 토큰의 검증 및 해당 토큰에 담긴 값이
  <br/>DB에 담긴 작성자의 id값과 일치하는지 인가 확인을 진행했습니다.

<br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b style="font-size: 22px;">💡 기타</b>
  </summary>

### 📌 유효하지 않은 주소

<img src="https://github.com/Be-log/be-log/assets/84097192/db7e7f5f-bd57-4942-b755-a577de669af1" alt="유효하지 않은 주소" width="800" />

- 사용자가 주소창에 유효하지 않은 주소를 입력할 경우
  <br/>route의 path="\*"를 이용해 404 에러 페이지로 랜딩되도록 처리하였습니다.

   <br/>

### 📌 유효하지 않은 게시글 및 로딩

<img src="https://github.com/Be-log/be-log/assets/84097192/acb93c55-1e40-4827-9aab-3e0b9fe8f5c8" alt="유효하지 않은 게시글 및 로딩" width="800" />

- 사용자가 주소창에 유효하지 않은 게시글 번호를 입력해 조회를 시도할 경우
  <br/>유효하지 않은 주소라는 alert를 띄우며 메인페이지로 다시 랜딩 처리하였습니다.

- 서버와 연결 중 로딩이 있을 경우 로딩 스피너를 구현하여
<br/>조회 대기 중임을 사용자가 명시적으로 알 수 있도록 하였습니다.

  <br/>
</details>

<br/> -->

---
