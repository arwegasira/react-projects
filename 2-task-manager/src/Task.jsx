import { useCompleteTask, useDeleteTask } from './CustomHooks'
import { AiOutlineDelete } from 'react-icons/ai'
const Task = (task) => {
  //0. hooks
  const { completeTask, completeLoading } = useCompleteTask()
  const { deleteTask, deleteLoading } = useDeleteTask()

  // =========================================================================
  // 1. complete task
  const handleChecked = ({ taskId, checked }) => {
    completeTask({ taskId, checked })
  }
  // 2. delete task
  const handleDelete = ({ taskId }) => {
    deleteTask({ taskId })
  }

  //3 . jsx
  return (
    <div className='task'>
      <span className='task-name'>
        <p>{task.task}</p>
        <span className='check-box'>
          <input
            type='checkbox'
            checked={task.completed}
            onChange={() =>
              handleChecked({ taskId: task._id, checked: !task.completed })
            }
          />
        </span>
      </span>

      <button
        type='button'
        className='delete-task'
        disabled={deleteLoading}
        onClick={() => handleDelete({ taskId: task._id })}
      >
        <AiOutlineDelete></AiOutlineDelete>
      </button>
    </div>
  )
}
export default Task
