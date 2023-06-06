export default function ({ app, redirect, from, store }) {
  // const cookieRes = app.$cookies.getAll();

  console.log(store.state.sessionid, 1111111);

  // console.log(cookieRes, "cookieRes account");

  // if (cookieRes) {
  //   if (from && from.matched[0].name === "account") {
  //     return redirect(from.fullPath);
  //   } else {
  //     return redirect("/account");
  //   }
  // }
}
