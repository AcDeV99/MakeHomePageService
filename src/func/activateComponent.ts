export function activateComponent(
  activeComponent: string,
  activeClassName: string,
  isActive: boolean
) {
  const componentWrapper = document.getElementById(
    `${activeComponent}`
  ) as HTMLDivElement | null;
  if (componentWrapper != null) {
    isActive
      ? componentWrapper.classList.add(`${activeClassName}`)
      : componentWrapper.classList.remove(`${activeClassName}`);
  }
}

// 순수 함수임에도 불구하고 react 컴포넌트에서 사용하려 하니 classList에서 에러 발생
// 모든 isActive를 redux에 저장
// redux 없이도 잘동작

// 함수가 한번 실행되고 그 후 실행 안되는 문제 발생
// → transition이 미동작 : css 작성 시 scale() translate() 순으로 작성하여 해결
// scale() 사용으로 화면 중앙 위치 불가 : scale() 사용시 transform-origin으로 위치 조정

// swtich문으로 작성했다가 하나의 onClick 이벤트가 추가될때마다 case도 늘어났기에
// isActive 매개변수를 추가하여 활성화여부를 받고 classList에 바로 active할 class명 추가
