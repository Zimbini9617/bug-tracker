import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import BugFormSkeleton from './layout';
import dynamic from 'next/dynamic';

const BugForm = dynamic(() => import('@/app/bugs/_components/BugForm'), {
  ssr: false,
  loading: () => <BugFormSkeleton />
})
const BugEditPage = async ({params}: {params:{id:string}}) => {
  const bug = await prisma.bug.findUnique({where:{id: params.id}})
  if (!bug) notFound();
  return <BugForm bug = {bug} />
}

export default BugEditPage;