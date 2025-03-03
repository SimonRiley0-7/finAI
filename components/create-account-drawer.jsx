"use client";

import React, { useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from './ui/drawer';

const CreateAccountDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div>{children}</div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add New Account</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateAccountDrawer;