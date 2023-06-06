export default function ({ app, redirect, from }) {
  const cookieRes = app.$cookies.get("sessionid");

  if (cookieRes) {
    if (from && from.matched[0].name === "account") {
      return redirect(from.fullPath);
    } else {
      return redirect("/account");
    }
  }
}
