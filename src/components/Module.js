import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { File } from "./File";

export const Module = ({ tasks }) => {
  return (
    <div className="column bg-slate-400 border-r-4 p-10 w-4/5 max-w-sm flex flex-col gap-3">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <File key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  );
};
