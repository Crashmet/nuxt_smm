export default function ({ app, redirect, from }) {
  const cookieRes = app.$cookies.get("access_token");

  if (cookieRes) {
    if (from && from.matched[0].name === "account") {
      return redirect(from.fullPath);
    } else {
      return redirect("/account");
    }
  }
}
