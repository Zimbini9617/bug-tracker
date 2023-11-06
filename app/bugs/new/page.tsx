import { Bug } from "@prisma/client";
import dynamic from "next/dynamic";
import BugFormSkeleton from "./loading";

const BugForm = dynamic(()=>import("../_components/BugForm"), {ssr: false, loading: ()=> <BugFormSkeleton />});
const NewBugPage = ({bug}:{bug: Bug}) => {
  return <BugForm />;
};
export default NewBugPage;