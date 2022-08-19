import { prisma } from "../db/client"
import { createRouter } from "./context"

export const itemRouter = createRouter()
  .query('all', {
    async resolve() {
      return prisma.item.findMany()
    },
  })