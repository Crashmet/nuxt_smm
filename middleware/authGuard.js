export default function ({ redirect, store }) {
  const cookieRes = "true";

  if (cookieRes === undefined || cookieRes === null) {
    return redirect("/login");
  }
}
