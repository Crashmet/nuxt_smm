export default function ({ app, redirect, from, store }) {
  const cookieRes = app.$cookies.get("sessionid", { fromRes: true });

  console.log(store.state.sessionid, 1111111, cookieRes);

  // console.log(cookieRes, "cookieRes account");

  // if (cookieRes) {
  //   if (from && from.matched[0].name === "account") {
  //     return redirect(from.fullPath);
  //   } else {
  //     return redirect("/account");
  //   }
  // }
}
