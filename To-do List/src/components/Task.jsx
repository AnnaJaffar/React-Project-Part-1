import React from 'react';
import { TbTrash } from 'react-icons/tb';

export default function Task({ task, onDelete, onComplete }) {
  return (
    <div className="bg-gray-200 p-2 gap-4 rounded-md text-blue-800 flex flex-grow items-center justify-between border-blue-300 w-full">
        <input className="flex-none" type="checkbox" checked={task.isCompleted}
          onChange={() => onComplete(task.id)}
        />      

        <p className={task.isCompleted ? "line-through" : ""}>
          {task.title}
        </p>

        <button className="flex-none" onClick={() => onDelete(task.id)}>
          <TbTrash size={20} />
        </button>
    </div>
  );
}
