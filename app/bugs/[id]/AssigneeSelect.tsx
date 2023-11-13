'use client';
import { User } from 'next-auth';
import { Select } from '@radix-ui/themes';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Skeleton from '@/app/components/Skeleton';
import { Bug } from '@prisma/client';
import toast, { Toaster } from "react-hot-toast";


const AssigneeSelect = ({bug}:{bug:Bug}) => {

  const assignBug = (userId: string) => {
    axios
      .patch("/api/issues/" + bug.id, {
        assignedToUserId: userId || null,
      })
      .catch(() => {
        toast.error("Changes could not be saved.");
      });
  };
  
const {
data: users,
error,
isLoading,
} = useUsers();

if (isLoading) return <Skeleton />;
if (error) return null;

return (
  <>
<Select.Root
defaultValue={bug.assignedToUserId || 'Unassigned'} 
onValueChange={assignBug}>
  
<Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="Unassigned">Unassigned</Select.Item>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
        <Select.Separator />
      </Select.Content>
    </Select.Root>
    <Toaster />
    </>
  );
};

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then((res) => res.data),
    staleTime: 60 * 1000, 
    retry: 3,
  });

export default AssigneeSelect;