# 코드 구조

- `src/common`에는 공용의 코드를 보관한다.
- 새로운 스키마 검사가 추가되어야 하는 경우, 아래의 단계를 따른다.
  1. `src/(서비스 또는 스키마들의 분류명)` 폴더를 추가하고, 그 폴더 안에 필요한 코드를 추가한다.
     - 스키마 정의용 클래스의 경우, 새로운 폴더에 `classes`라는 폴더를 만들고 그 안에 스키마 정의용 클래스를 작성하면 된다.
  2. `src/App.tsx`에 `ApiValidatorGroupTitle`와 `ApiValidator` 컴포넌트를 사용하여 스키마 검증용 인터페이스를 구성한다.
