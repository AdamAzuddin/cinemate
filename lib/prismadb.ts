import { PrismaClient } from "@prisma/client";

//save PrismaCLient in global client because not affeceted by hot reload
const client = global.prismadb || new PrismaClient()

// but not in production
if (process.env.NODE_ENV == 'production') global.prismadb = client 

export default client;