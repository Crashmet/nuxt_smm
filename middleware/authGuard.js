export default function ({ app, redirect }) {
  const cookieRes = app.$cookies.get("sessionid");
  console.log(cookieRes);

  if (cookieRes === undefined || cookieRes === null) {
    return redirect("/login");
  }
}
