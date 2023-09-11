<p align="center">

<img width="1511" alt="mainImg" src="https://github.com/finalProject-12/finalproject-12FE/assets/109677566/d2ca433f-6ad6-47c8-83c6-1c618bb3c0bc">

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

# 👀 기능 및 화면 미리보기

<details>
  <summary>
    &nbsp;&nbsp;<b style="font-size: 22px;">💡 홈 화면</b>
  </summary>

![홈화면](https://github.com/finalProject-12/finalproject-12FE/assets/109677566/d47d115f-efa5-491d-9b66-1bb217ac796d)

- 홈 화면에서 편지쓰기, 응원글 쓰기로 들어갈 수 있으며
<br/>헤더에 뒤로가기 및 저장하기 기능을 넣어서 직관적인 UI를 만들었습니다.
<br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b style="font-size: 22px;">💡 편지쓰기</b>
  </summary>

### 📌 편지 작성

  <table>
    <tr>
      <th>실수로 나가도 초기화되지 않는 편지</th>
    </tr>
    <tr>

![편지쓰기](https://github.com/finalProject-12/finalproject-12FE/assets/109677566/076ed29f-62ef-43ad-acf1-679f9d313b79)

</tr>

  </table>

- recoil-persist + 세션스토리지를 이용 ➡️ 새로고침시 편지내용이 초기화되는걸 방지

   <br/>

### 📌 이메일 인증

  <table>
    <tr>
      <td>

![이메일인증](https://github.com/finalProject-12/finalproject-12FE/assets/109677566/5f63ec64-a420-472e-bc22-ad5f7ea8e714)

</td>
</tr>

  </table>

- 실제 사용하는 이메일인지 확인을 위하여 편지를 받을 이메일에 인증번호를 발송해서 확인하였습니다.
- 타이머를 적용해서 인증번호 만료시간을 표시하였습니다.

<br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b style="font-size: 22px;">💡 응원글</b>
  </summary>

### 📌 응원글 작성 및 리스트

![응원글 작성 및 리스트](src/assets/응원글.gif)

- 작성자, 내용에 아무것도 적히지 않고 저장을 누를 경우 입력창으로 포커스가 되도록 유효성검사를 했으며
  <br/> 응원글이 등록되면 원래 적혀있던 내용은 비워지도록 처리했습니다.

- 응원글이 등록되면 최신 등록글이 제일 위로 올라오게 처리하였으며
  <br/> 새로고침을 하지 않아도 바로바로 리스트에 추가되어서 보여지게 하였습니다.

---
