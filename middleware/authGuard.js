export default function ({ app, redirect }) {
  const cookieRes = app.$cookies.get("sessionid");
  console.log(cookieRes, "cookieRes login");

  if (cookieRes === undefined || cookieRes === null) {
    return redirect("/login");
  }
}
