/**
 * Utility function to add a display name to a react component.
 */
export const addDisplayName = <TProps extends object>(
  component: React.ComponentType<TProps>,
  displayName: string,
): void => {
  (component as React.ComponentType).displayName = displayName;
};
