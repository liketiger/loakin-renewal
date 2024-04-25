# 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [배포 사이트 주소](#배포-사이트-주소)
3. [기술 스택](#기술-스택)
4. [폴더 구조](#폴더-구조)
5. [데모 영상](#데모-영상)
6. [상세 기능](#상세-기능)
7. [개발 과정](#개발-과정)
8. [트러블 슈팅](#트러블-슈팅)
9. [개선 예정 사항](#개선-예정-사항)
10. [회고록](#회고록)

<br>

# 프로젝트 개요
- LoaKin: LostArk Kindergarten (로스트아크 유치원 - 로아킨)
- 이전 버전에서 리뉴얼 되었음. (이전 버전 - https://github.com/liketiger/loakin)
- 로스트아크 레이드 스케쥴 관리 웹 애플리케이션.
- 로스트아크라는 온라인 MMORPG 게임을 플레이하는 친구 및 지인들의 요청으로 제작.
- 실제 소규모 유저들을 대상으로 서비스 예정이었으나 일부가 게임을 접은 관계로 필요성이 없어져 해당 계획은 잠시 중단.
- 개인프로젝트이며 대략 2달정도 소요.

<br>

# 프로젝트의 실행 방법

> npm install<br>npm run dev

<br>

# 배포 사이트 주소

https://loakin.netlify.app/

<br>

# 기술 스택

<div align=left>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/zustand-3B66BC?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">
  <img src="https://img.shields.io/badge/contextapi-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <br>
  <img src="https://img.shields.io/badge/cssmodules-000000?style=for-the-badge&logo=cssmodules&logoColor=white">
  <img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
</div>

<br>

# 폴더 구조
```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Btn.tsx
 ┃ ┃ ┣ 📜CustomModal.tsx
 ┃ ┃ ┣ 📜HookFormInput.tsx
 ┃ ┃ ┣ 📜HookFormSelect.tsx
 ┃ ┃ ┣ 📜HookFormText.tsx
 ┃ ┃ ┗ 📜HookFormTimePicker.tsx
 ┃ ┣ 📂control-pannel
 ┃ ┃ ┗ 📜ControlPannel.tsx
 ┃ ┣ 📂dialog
 ┃ ┃ ┣ 📜Dialog.tsx
 ┃ ┃ ┣ 📜useDialog.ts
 ┃ ┃ ┗ 📜useState.ts
 ┃ ┣ 📂show-data
 ┃ ┃ ┣ 📜FallBackUI.tsx
 ┃ ┃ ┣ 📜NoResult.tsx
 ┃ ┃ ┣ 📜Spinner.tsx
 ┃ ┃ ┗ 📜TableSpinner.tsx
 ┃ ┣ 📂table
 ┃ ┃ ┣ 📜CommonTable.tsx
 ┃ ┃ ┣ 📜CommonTableContainer.tsx
 ┃ ┃ ┣ 📜Td.tsx
 ┃ ┃ ┗ 📜Th.tsx
 ┃ ┗ 📜AppBar.tsx
 ┣ 📂constants
 ┃ ┗ 📜index.ts
 ┣ 📂pages
 ┃ ┣ 📂hooks
 ┃ ┣ 📂member
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜mutation.ts
 ┃ ┃ ┃ ┗ 📜query.ts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📂layout
 ┃ ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜Layout.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┃ ┣ 📂constants
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┣ 📜parameter.ts
 ┃ ┃ ┃ ┗ 📜view.ts
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┣ 📜constants.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂widgets
 ┃ ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ModalCharacterTable.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Row.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provier.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberSearchInput.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provider.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┃ ┗ 📂table
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberTable.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberTableList.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MemberTableRow.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provider.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜useState.ts
 ┃ ┣ 📂schedule
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┗ 📜query.ts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📂layouts
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜Layout.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┃ ┣ 📂constants
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┗ 📜view.ts
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂widgets
 ┃ ┃ ┃ ┗ 📂calendar
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Calendar.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provider.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜useState.ts
 ┃ ┣ 📂schedule-detail
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜mutation.ts
 ┃ ┃ ┃ ┗ 📜query.ts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📂layout
 ┃ ┃ ┃ ┃ ┣ 📜Body.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┃ ┣ 📂constants
 ┃ ┃ ┣ 📂features
 ┃ ┃ ┣ 📂query
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┣ 📜parameter.ts
 ┃ ┃ ┃ ┗ 📜view.ts
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┣ 📜constants.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂widgets
 ┃ ┃ ┃ ┣ 📂party-members
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┗ 📜PartyMembersTable.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provider.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┃ ┣ 📂party-members-row
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BackdropWrapper.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜PartyMembersTableList.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜PartyMembersTableRow.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provider.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┃ ┣ 📂raid-schedules
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┗ 📜RaidTable.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provider.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┃ ┗ 📂raid-schedules-row
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BackdropWrapper.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜RaidTableList.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜RaidTableRow.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provider.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜usetState.ts
 ┃ ┗ 📂settings
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜mutation.ts
 ┃ ┃ ┃ ┗ 📜query.ts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📂layout
 ┃ ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜Layout.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┃ ┣ 📂constants
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┣ 📜parameter.ts
 ┃ ┃ ┃ ┗ 📜view.ts
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂widgets
 ┃ ┃ ┃ ┣ 📂raid-settings
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜RaidSettingsSearchInput.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜RaidSettingsTable.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provider.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┃ ┗ 📂raid-settings-table-row
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BackdropWrapper.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜RaidSettingsTableList.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜RaidSettingsTableRow.tsx
 ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┣ 📜context.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜provider.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜useProvider.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜useQueryLogic.ts
 ┃ ┃ ┃ ┃ ┗ 📜widget.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜useState.ts
 ┣ 📂services
 ┃ ┣ 📂member
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂party-members
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂raids
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂settings
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜supabase.ts
 ┣ 📂theme
 ┃ ┗ 📜index.ts
 ┣ 📂type
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┣ 📜colors.ts
 ┃ ┗ 📜index.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┗ 📜main.tsx
```
<br>

# 데모 영상

![]()

<br>

# 상세 기능
- 스케쥴 페이지의 달력에 레이드 일정 표시
    - 특정 날짜 클릭 시 해당 날짜에 있는 레이드와 참여 캐릭터 확인, 등록, 수정 및 삭제 가능 (CRUD)
- 게임사 API를 통해 불러온 각 멤버별 캐릭터를 선택 가능
- 레이드 추가시 달력에 표시
- 설정 페이지에서 레이드 설정 가능 (CRUD 및 검색)
    - 설정한 레이드는 스케쥴 상세 페이지의 셀렉터에서 선택 가능
- 멤버 페이지에서 게임사 API를 통해 불러온 멤버별 캐릭터 리스트에서 원하는 캐릭터를 멤버에 추가 가능 (검색 가능)
    - 이미 존재하는 멤버를 추가시 자동으로 덮어써서 실시간 유저 정보 업데이트 가능
    - 추가한 멤버는 스케쥴 상세 페이지의 셀렉터에서 선택 가능
- 캐릭터 클릭시 모달로 상세 정보 확인 가능 (추가 예정)

<br>

# 개발 과정

**💡 기술 스택 선정 과정**

- UX 향상을 위해 SPA로 제작하기로 결정
- 생산성 증가를 위해 프레임워크 및 라이브러리 사용 결정
- 프로젝트 사이즈, 서포트 기업, 커뮤니티 크기, 러닝 커브 등을 고려해 React로 선정
- 서버 상태 관리의 용이함을 위해 tanstack-query(react-query) 사용
- 캐시된 데이터를 렌더링에 사용하므로 필요성이 적어진 클라이언트 상태는 사용법이 간단한 Zustand로 선정
- 안정성, 가독성 및 성능 향상의 목적으로 TypeScript 적용
- 생산성 증가를 위해 FullCalendar, react-hook-form, supabase, dayjs 라이브러리 사용
- 경제적인 이유로 인해 무료 배포 서비스인 Netlify 이용

<br>

# 트러블 슈팅

**💡 UX 관련 고민**

- CRUD 기능의 인터렉션 부분을 화면의 곳곳에 분리할 예정이었으나 UX 개선을 위해 컨트롤 패널(컨텐스트 메뉴)을 생성하여 CRUD 기능을 한 곳으로 모음.
    - 기존 기획은 추가 버튼과 삭제 버튼이 상단에 따로 있고 checkbox로 선택하여 삭제하는 방식
- CRUD시 로딩되는 시간 동안 UX 개선을 위해 로딩스피너 적용 및 그에 따른 컴포넌트 분리
    - 테이블 헤더는 미리 렌더링 되고 테이블 바디에만 로딩 스피너가 돌도록 분리

**💡 구조 및 패턴 관련 고민**

- 상단 Nav바를 기준으로 page(feature)로 구분하고 각 page별로 화면과 api를 기준으로 widget으로 재 구분
- Widget의 경우 명시적인 구분과 관리 용이성을 위해 Context api로 묶어 하나의 통로로 api 통신 함수를 주입하도록 설계
- 추가 작업 가능성 및 결합도 저하를 고려해 통신 함수를 repository로 한 번 더 감쌈
- 재사용성을 위해 Compound Component 패턴으로 모달 제작

**💡 성능 관련 고민**

- MUI를 사용할 경우 여러개의 MUI 컴포넌트를 렌더링하면 화면 로딩이 지연되는 문제가 있는걸 알고 있어 가상화 혹은 행 클릭 수정 등을 적용할 예정이었으나 성능에 문제가 생길 정도로 예상 데이터가 많지 않아 보류함.

<br>

# Github commit convention

* Feat : implement new features
* Init : set initial state or change style (esLint, formatter, ...etc)
* Fix : fix bugs or change feature
* Style: adjust markup and css
* Refactor : code refactoring
* Docs : add or modify documentations
* Chore : minor fixes that doesn't include above

<br>

# 개선 예정 사항

**💡 구조 변경**

- 크게 문제 되지는 않으나 현재 구조는 트레이드 오프가 있어 변경 가능성 있음 
    - Widget 별로 Context Api를 사용해 Query 관련 로직을 내려줘 명시적으로 구분이 용이함과 동시에 한 곳에서 관리하므로 유지보수가 용이함
    - 다만 초반 코드 작성량이 많아짐과 동시에 리렌더링 관련 성능 이슈가 있음

**💡 추가 페이지 및 기능**

- 캐릭터 클릭시 캐릭터 상세 모달 화면 구현 예정
    - 게임사에서 제공하는 api 관련 문제로 잠시 보류
- 멤버 페이지의 리스트에 성능 향상을 위해 가상화 적용 예정

**💡 성능 개선**

- 추후에 캐릭터 상세 페이지에서 이미지 렌더링시 이미지 최적화 적용 예정
- 일부 메모이제이션 적용되지 않은 부분들에 메모이제이션 적용 고려
- 번들 사이즈 축소 및 초기 로딩 시간 개선을 위해 코드 스플리팅 적용 예정
- 멤버 페이지의 리스트에 렌더링 속도 향상을 위한 가상화 적용 예정

<br>

# 회고록

- [링크](https://velog.io/@liketiger/%EB%A1%9C%EC%95%84%ED%82%A8-%EB%A6%AC%EB%89%B4%EC%96%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D)