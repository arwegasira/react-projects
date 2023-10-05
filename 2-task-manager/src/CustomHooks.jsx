import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { customFetch } from './Axios/customFetch'
import { useGlobalContext } from './Context'

export const useFetchTasks = (setTasks) => {
  const { filter } = useGlobalContext()
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['task', filter],
    queryFn: async () => {
      const { data } = await customFetch.get(`/?task=${filter}`)
      setTasks(data)
      return data
    },
  })
  return { isLoading, isError, error, data }
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  const { mutate: createTask, isLoading: createTaskLoading } = useMutation({
    mutationFn: (task) => customFetch.post('/', { task: task }),
    onError: (error) => console.log(error),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['task'] })
    },
  })
  return { createTask, createTaskLoading }
}

export const useCompleteTask = () => {
  const queryClient = useQueryClient()
  const { mutate: completeTask, isLoading: completeLoading } = useMutation({
    mutationFn: ({ taskId, checked }) =>
      customFetch.patch(`/${taskId}?checked=${checked}`),
    onError: (error) => console.log(error),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['task'] })
    },
  })
  return { completeTask, completeLoading }
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteTask, isLoading: deleteLoading } = useMutation({
    mutationFn: ({ taskId }) => customFetch.delete(`/${taskId}`),
    onError: (error) => console.log(error),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['task'] })
    },
  })
  return { deleteLoading, deleteTask }
}

export const useClearTaskList = () => {
  const queryClient = useQueryClient()
  const { mutate: clearTaskList, isLoading: clearListLoading } = useMutation({
    mutationFn: ({}) => customFetch('/deleteall'),
    onError: (error) => console.error(error),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['task'] })
    },
  })
  return { clearTaskList, clearListLoading }
}

export const useFilterTask = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['filter'],
    queryFn: async (task) => {
      const { data } = await customFetch.post('/filter', { task: task })
      return data
    },
  })
  return {
    data: dataFilter,
    isLoading: filterLoading,
    isError: filterIsError,
    error: filterError,
  }
}
