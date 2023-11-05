import prisma from '@/prisma/client';
import BugForm from '../../_components/BugForm';
import { notFound } from 'next/navigation';

const BugEditPage = async ({params}: {params:{id:string}}) => {
  const bug = await prisma.bug.findUnique({where:{id: params.id}})
  if (!bug) notFound();
  return <BugForm bug = {bug} />
}

export default BugEditPage;