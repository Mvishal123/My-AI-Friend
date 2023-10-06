const {PrismaClient} = require("@prisma/client");

const prismadb = new PrismaClient();

const main = async () => {
    try {
        await prismadb.category.createMany({
            data: [
                {name: "Famous Peoples"},
                {name: "Movies & TV"},
                {name: "Musicians"},
                {name: "Games"},
                {name: "Animals"},
                {name: "Scientists"},
                {name: "Anime"},
            ]
        })
    } catch (error) {
        console.error("Error while seeding category data: ", error);
    } finally{
        await prismadb.$disconnect();
    }
}

main()