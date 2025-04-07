import { auth } from "@/lib/auth";

async function page() {
  const session = await auth();
  return <div>{session?.user?.email}</div>;
}
export default page;
