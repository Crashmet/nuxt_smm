export default function (context) {
  const cookieRes = context.app.$cookies.get("access_token");

  if (cookieRes) {
    if (context.from.matched[0].name === "account") {
      return context.redirect(context.from.fullPath);
    } else {
      return context.redirect("/account");
    }
  }
}
