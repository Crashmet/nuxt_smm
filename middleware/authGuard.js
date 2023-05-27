export default function ({ redirect, store }) {
  const isAuthenticated = store.state.authStore.access_token;

  if (isAuthenticated === null) {
    redirect({ path: "/login" });
  }
}
