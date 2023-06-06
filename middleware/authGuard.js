export default function ({ app, redirect, store }) {
  const cookieRes = app.$cookies.get("sessionid", { fromRes: true });

  console.log(store.state.sessionid, "22222222", cookieRes);

  if (cookieRes === undefined || cookieRes === null) {
    return redirect("/login");
  }
}
