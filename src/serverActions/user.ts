import { auth as getSession } from "@/auth";
import { prisma } from "@/helpers/prismadb";

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    console.log("session", session);
    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    if (!currentUser) return null;
    return currentUser;
  } catch (e) {
    console.error(e);
  }
}
