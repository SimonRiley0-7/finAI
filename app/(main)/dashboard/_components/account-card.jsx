import { Switch } from '@/components/ui/switch';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const AccountCard = ({account}) => {
    const {name, type, balance, id, isDefault} = account;
  return (
    <div>
    <Card>
        <CardHeader>
            <CardTitle>{name}</CardTitle>
            <Switch/>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>

    </div>
  )
}

export default AccountCard
