-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "totalLikes" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "totalComments" SET DEFAULT 0,
ALTER COLUMN "totalLikes" SET DEFAULT 0;
