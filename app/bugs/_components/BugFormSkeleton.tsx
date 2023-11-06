import { Skeleton } from '@/app/components';

const BugFormSkeleton = () => {
  return (
    <div className='max-w-2xl'>
      <Skeleton height="2rem"/>
      <Skeleton height="16rem"/>
    </div>
  );
};
    
export default BugFormSkeleton;