export default function ({ app, redirect }) {
  const cookieRes = app.$cookies.get("sessionid");

  if (cookieRes === undefined || cookieRes === null) {
    return redirect("/login");
  }
}
