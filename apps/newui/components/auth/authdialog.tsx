import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import React from 'react'
import LoginForm from "./LoginForm"
  
  const authdialog = () => {
    return (
      <div>
        <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <LoginForm></LoginForm>
  </DialogContent>
</Dialog>
      </div>
    )
  }
  
  export default authdialog
  