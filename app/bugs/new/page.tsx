import dynamic from "next/dynamic";
import BugFormSkeleton from "./loading";
import { Bug } from "../types/types";
 

const BugForm = dynamic(() => import("../_components/BugForm"), {
  ssr: false,
  loading: () => <BugFormSkeleton />,
});

const NewBugPage = () => {
  
  const sampleBug: Bug = {
    id: "1",
    title: "Sample Bug",
    description: "This is a sample bug",
    status: "CLOSE",
    createdAt: new Date(),
    updatedAt: new Date(),
    assignedToUserId: "123",
  };

  return <BugForm bug={sampleBug} />;
};

export default NewBugPage;
