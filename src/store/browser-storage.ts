const KEY = "redux";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    const serializedState = JSON.stringify({
      user: state.user,
    });

    localStorage.setItem(KEY, serializedState);
    document.cookie = `token=${state.user.token}`;
  } catch (e) {
    // Ignore
  }
}
