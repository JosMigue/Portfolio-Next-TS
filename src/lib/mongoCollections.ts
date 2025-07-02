import { connectToDatabase } from "@/lib/mongoConnector";
const experiencesCollection = "Experiences";
const projectsCollection = "Projects";
const skillsCollection = "Skills";

export const getExperiencesCollection = async () => {
  const { db } = await connectToDatabase();
  let collection: any = await db.collection("Experiences").find({}).toArray();
  console.log("Experiences Collection:", collection);
  return collection;
}
