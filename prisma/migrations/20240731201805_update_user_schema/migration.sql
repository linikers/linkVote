-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "anatomy" INTEGER NOT NULL,
    "creativity" INTEGER NOT NULL,
    "pigmentation" INTEGER NOT NULL,
    "traces" INTEGER NOT NULL,
    "readability" INTEGER NOT NULL,
    "visualImpact" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "anatomy" INTEGER NOT NULL,
    "creativity" INTEGER NOT NULL,
    "pigmentation" INTEGER NOT NULL,
    "traces" INTEGER NOT NULL,
    "readability" INTEGER NOT NULL,
    "visualImpact" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
