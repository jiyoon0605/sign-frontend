# Sign Frontend

---

## 개요

### 프로젝트 설명

`Sign` 은 온라인상에서 서명 수집 운동을 진행할 수 있는 웹 플랫폼입니다.

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

```
sign-frontend
├─ src
│  ├─ api
│  │  └─ index.ts
│  ├─ App.tsx
│  ├─ components
│  │  ├─ index.tsx
│  │  ├─ login
│  │  │  ├─ index.ts
│  │  │  ├─ loginContainer.tsx
│  │  │  └─ loginPresenter.tsx
│  │  ├─ mypage
│  │  │  ├─ index.ts
│  │  │  ├─ mypageContainer.tsx
│  │  │  └─ mypagePresenter.tsx
│  │  ├─ post
│  │  │  ├─ index.ts
│  │  │  ├─ popularPost
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ popularPostContainer.tsx
│  │  │  │  └─ popularPostPresenter.tsx
│  │  │  ├─ postContainer.tsx
│  │  │  └─ postPresenter.tsx
│  │  ├─ postDetail
│  │  │  ├─ index.ts
│  │  │  ├─ postDetailContainer.tsx
│  │  │  └─ postDetailPresenter.tsx
│  │  ├─ postItem
│  │  │  ├─ index.tsx
│  │  │  ├─ postItemContainer.tsx
│  │  │  ├─ postItemPresenter.tsx
│  │  │  └─ progress.tsx
│  │  ├─ register
│  │  │  ├─ index.ts
│  │  │  ├─ registerContainer.tsx
│  │  │  └─ registerPresenter.tsx
│  │  └─ write
│  │     ├─ index.ts
│  │     ├─ writeContainer.tsx
│  │     └─ writePresenter.tsx
│  ├─ index.tsx
│  ├─ modules
│  │  ├─ index.ts
│  │  ├─ login.ts
│  │  ├─ mypage.ts
│  │  ├─ post.ts
│  │  ├─ register.ts
│  │  ├─ userData.ts
│  │  └─ write.ts
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ setupTests.ts
│  ├─ store
│  │  └─ index.ts
│  └─ style
│     ├─ auth.ts
│     ├─ container.ts
│     ├─ mypage.ts
│     ├─ post.ts
│     ├─ postDetail.ts
│     └─ write.ts
├─ tsconfig.json
└─ yarn.lock

```
