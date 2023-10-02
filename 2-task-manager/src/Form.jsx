import Button from './Button'
import { useState } from 'react'
import { useCreateTask } from './CustomHooks'
const Form = () => {
  const [task, setTask] = useState('')
  const { createTask, createTaskLoading } = useCreateTask()

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(task, {
      onSuccess: () => setTask(''),
      onError: (error) => console.log(error),
    })
  }

  return (
    <div className='form-center'>
      <form action='' onSubmit={(e) => handleSubmit(e)}>
        <div className='input-container'>
          <input
            type='text'
            placeholder='New Task'
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </div>
        <div className='submit-container'>
          <Button
            type='submit'
            text='Submit'
            bg='#3f704d'
            color='#fff'
            isLoading={createTaskLoading}
          ></Button>
        </div>
      </form>
    </div>
  )
}
export default Form
