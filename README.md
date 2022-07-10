# CORS 프로젝트
<img width=600 src="https://user-images.githubusercontent.com/93169519/178144417-7c8932ac-7e1e-4b59-97da-a8df92690624.png" />

CORS 통신 테스트 프로젝트 입니다.

<br/>

## 🐶 사전 준비물
Mac 의 경우 Homebrew 를 통해 간단하게 설치 가능합니다.
1. node, npm
  ```shell
  # node 설치
  brew install node
  
  # node, npm 설치 확인
  node -v
  npm -v
  ```
2. yarn
  ```shell
  # yarn 설치
  brew install yarn
  
  # yarn 설치 확인
  yarn -v
  ```
<br/>

## 🏄‍♂️ 사용법
1. 해당 프로젝트를 다운로드 받은 후에 **터미널로 해당 프로젝트로 이동**해줍니다.
2. 패키지를 설치해줍니다.
  ```shell
  # 패키지 설치
  npm install
  ```
3. 이제 실행해주면 됩니다.
  ```shell
  yarn start
  ```
4. 각각의 버튼(`GET`, `POST`, `PATCH`, `DELETE`)을 눌러서 통신을 확인해주세요.
  
<br/>  

## ⁉️ 주의사항
<img width=600 src="https://user-images.githubusercontent.com/93169519/178144682-288fc518-943f-4c27-bdb0-c43a2e8e2743.png" />

위와 같이 ERROR 메시지가 출력 된다면, Console을 통해서 자세한 오류 내용을 확인할 수 있습니다.

<img width=600 src="https://user-images.githubusercontent.com/93169519/178144711-a215bd95-9b76-428b-969c-dd9e73a5c4ca.png" />

`Refused` 되었다면 설정이 제대로 되지 않았다는 거겠죠? 🫠
