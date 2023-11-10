'use client'
import React, { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Spinner } from '@/app/components';
import { Alegreya_Sans } from 'next/font/google';

const DeleteBugButton = ({ bugId }: { bugId: string }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  return (
  <>
  <AlertDialog.Root>
    <div>
  <AlertDialog.Trigger>
    <Button color="red" disabled={isDeleting}>DELETE BUG {isDeleting && <Spinner />}</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>CONFIRM DELETION</AlertDialog.Title>
    <AlertDialog.Description>
      {' '}
      Are you sure? This application will no longer be accessible and any
      existing sessions will be expired.
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
    <AlertDialogCancel>
      <Button variant='soft' color='blue'>
        CANCEL
      </Button>
    </AlertDialogCancel>
    <AlertDialogAction>
      <Button variant='solid' color='indigo' onClick={async () =>{
        try {
          setDeleting(true);
          await axios.delete('/api/bugs/edit/' + bugId);
          router.push('/bugs/list');
          router.refresh();
        } catch (error){
          setError(true);
        }
      }}>
        DELETE BUG
      </Button>
    </AlertDialogAction>
    </Flex>
    </AlertDialog.Content>
    </div>
    </AlertDialog.Root>

    <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error Message</AlertDialog.Title>
          <AlertDialog.Description>
            Unable to delete this issue
          </AlertDialog.Description>
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray" onClick={() => setError(false)}>
              OK
            </Button>
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Root>
  </>
  );
  
};

export default DeleteBugButton;