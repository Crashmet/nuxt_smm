export default function ({ app, redirect }) {
  const cookieRes = app.$cookies.get("access_token");

  if (cookieRes === undefined || cookieRes === null) {
    return redirect("/login");
  }
}
