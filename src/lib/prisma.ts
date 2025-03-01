import { PrismaClient } from '@prisma/client'

// グローバルスコープにPrismaインスタンスを保持できる場所を作る
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// Prismaインスタンスがあれば使う、なければ新しく作る
export const prisma = globalForPrisma.prisma ?? new PrismaClient()

// 開発環境でのみ使用
if (process.env.NODE_ENV === 'production') {
  globalForPrisma.prisma = prisma
}
