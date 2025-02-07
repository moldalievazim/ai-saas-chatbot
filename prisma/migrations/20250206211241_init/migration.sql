-- CreateTable
CREATE TABLE "Billings" (
    "id" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Billings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Billings" ADD CONSTRAINT "Billings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
