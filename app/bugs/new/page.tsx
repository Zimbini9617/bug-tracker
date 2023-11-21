import dynamic from "next/dynamic";
import BugFormSkeleton from "./loading";



const BugForm = dynamic(()=>import("../_components/BugForm"), {
  ssr: false, 
  loading: ()=> <BugFormSkeleton />
});
const NewBugPage = () => {
  return <BugForm />;
};
export default NewBugPage;