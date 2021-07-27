-- CreateTable
CREATE TABLE "Swell" (
    "id" SERIAL NOT NULL,
    "height" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "direction" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wave" (
    "id" SERIAL NOT NULL,
    "heightMin" TEXT NOT NULL,
    "heightMax" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
