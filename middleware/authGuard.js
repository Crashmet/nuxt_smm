export default function ({ redirect, store }) {
  const cookieRes = store.state.sessionid;

  if (cookieRes === undefined || cookieRes === null) {
    return redirect("/login");
  }
}
