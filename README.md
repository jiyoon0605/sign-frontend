# Sign Frontend

---

## 개요

### 프로젝트 설명

`Sign` 은 온라인상에서 서명 수집 운동을 진행할 수 있는 웹 플랫폼입니다.

### 개발 배경

이전에 아파트 경비원분께서 아파트를 한층한층 방문하시며 서명을 받아가신적이 있는데, 그 경비원분도 힘들어 보이시고 저 역시 어떤 서명운동인지 모르는데 서명을 요구당하여 당황했던 경험이 있었습니다. Sign은 온라인 상에서 서명 수집 운동을 진행할 수 있는 웹 플랫폼으로 저와 같은 경험으로 불편함을 느낀 사람들을 위해 개발한 프로젝트입니다.

---

## 사용 스택

### Front-End

- HTML
- TypeScript
- React
- Redux-saga
- styled-component

### Back-end

- JavaScript
- Node.js
- express
- mongoose

### DevOps

- mongoDB
- cloudinary
- git
- heroku
- netlfly

---

## 파일구조

<details>
<summary>파일구조</summary>

📦src<br/>
┣ 📂api<br/>
┃ ┗ 📜index.ts<br/>
┣ 📂components<br/>
┃ ┣ 📂login<br/>
┃ ┃ ┣ 📜index.ts<br/>
┃ ┃ ┣ 📜loginContainer.tsx<br/>
┃ ┃ ┗ 📜loginPresenter.tsx<br/>
┃ ┣ 📂mypage<br/>
┃ ┃ ┣ 📜index.ts<br/>
┃ ┃ ┣ 📜mypageContainer.tsx<br/>
┃ ┃ ┗ 📜mypagePresenter.tsx<br/>
┃ ┣ 📂post<br/>
┃ ┃ ┣ 📂popularPost<br/>
┃ ┃ ┃ ┣ 📜index.ts<br/>
┃ ┃ ┃ ┣ 📜popularPostContainer.tsx<br/>
┃ ┃ ┃ ┗ 📜popularPostPresenter.tsx<br/>
┃ ┃ ┣ 📜index.ts<br/>
┃ ┃ ┣ 📜postContainer.tsx<br/>
┃ ┃ ┗ 📜postPresenter.tsx<br/>
┃ ┣ 📂postDetail<br/>
┃ ┃ ┣ 📜index.ts<br/>
┃ ┃ ┣ 📜postDetailContainer.tsx<br/>
┃ ┃ ┗ 📜postDetailPresenter.tsx<br/>
┃ ┣ 📂postItem <br/>
┃ ┃ ┣ 📜index.tsx <br/>
┃ ┃ ┣ 📜postItemContainer.tsx <br/>
┃ ┃ ┣ 📜postItemPresenter.tsx <br/>
┃ ┃ ┗ 📜progress.tsx <br/>
┃ ┣ 📂register <br/>
┃ ┃ ┣ 📜index.ts <br/>
┃ ┃ ┣ 📜registerContainer.tsx <br/>
┃ ┃ ┗ 📜registerPresenter.tsx <br/>
┃ ┣ 📂write <br/>
┃ ┃ ┣ 📜index.ts <br/>
┃ ┃ ┣ 📜writeContainer.tsx <br/>
┃ ┃ ┗ 📜writePresenter.tsx <br/>
┃ ┗ 📜index.tsx <br/>
┣ 📂modules <br/>
┃ ┣ 📜index.ts <br/>
┃ ┣ 📜login.ts <br/>
┃ ┣ 📜mypage.ts <br/>
┃ ┣ 📜post.ts <br/>
┃ ┣ 📜register.ts <br/>
┃ ┣ 📜userData.ts <br/>
┃ ┗ 📜write.ts <br/>
┣ 📂store <br/>
┃ ┗ 📜index.ts <br/>
┣ 📂style <br/>
┃ ┣ 📜auth.ts <br/>
┃ ┣ 📜container.ts <br/>
┃ ┣ 📜mypage.ts <br/>
┃ ┣ 📜post.ts <br/>
┃ ┣ 📜postDetail.ts <br/>
┃ ┗ 📜write.ts <br/>
┣ 📜App.tsx <br/>
┣ 📜index.tsx <br/>
┣ 📜react-app-env.d.ts <br/>
┣ 📜reportWebVitals.ts <br/>
┗ 📜setupTests.ts <br/>

</details>

---

## Demo

https://agitated-keller-3c8c86.netlify.app
