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
