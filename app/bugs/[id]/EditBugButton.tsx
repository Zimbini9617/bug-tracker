import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const EditBugButton = ({ bugId }: { bugId: string }) => {
  return (
    <Button color='green'>
      <Pencil2Icon />
      <Link href={`/bugs/edit/${bugId}`}>UPDATE BUG</Link>
    </Button>
  )
}

export default EditBugButton;
