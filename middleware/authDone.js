export default function ({ redirect, from, store }) {
  const cookieRes = store.state.sessionid;

  if (cookieRes) {
    if (from && from.matched[0].name === "account") {
      return redirect(from.fullPath);
    } else {
      return redirect("/account");
    }
  }
}
