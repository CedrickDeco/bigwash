// import { PrismaClient } from '@prisma/client';

import { PrismaClient } from "@/prisma";

// const prisma = new PrismaClient();

// export default prisma;





declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma; // Permet de réutiliser la même instance en développement
}

export default prisma;