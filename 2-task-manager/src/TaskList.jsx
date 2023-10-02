import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import Button from './Button'
import { useFetchTasks, useClearTaskList } from './CustomHooks'
import Task from './Task'
const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const { isLoading, isError, error, data } = useFetchTasks(setTasks)

  const { clearTaskList, clearListLoading } = useClearTaskList()

  const buttonProps = {
    color: '#fff',
    bg: '#333',
    type: 'button',
    text: 'Clear All',
    action: clearTaskList,
    isLoading: clearListLoading,
  }

  if (isLoading) {
  }
  if (isError) {
  }
  return (
    <div className='taskList-center'>
      <h4> Task List</h4>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Filter List'
          onChange={(e) => {
            console.log(e.target.value)
          }}
        />
      </div>
      <div className='task-list'>
        {data &&
          tasks.map((task) => {
            return <Task {...task} key={task._id}></Task>
          })}
      </div>
      <div className='submit-container'>
        <Button {...buttonProps}></Button>
      </div>
    </div>
  )
}
export default TaskList
