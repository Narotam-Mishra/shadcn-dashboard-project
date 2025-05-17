import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';

const TodoList = () => {
  return (
    <div>
      Calender
      {/* list */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        {/* list item */}
        <Card className='p-4'>
          <div className="flex items-center gap-4">
            <Checkbox id="item1" checked />
            <label htmlFor="item1" className='text-sm text-muted-foreground'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </label>
          </div>
        </Card>
      </ScrollArea>
    </div>
  );
}

export default TodoList