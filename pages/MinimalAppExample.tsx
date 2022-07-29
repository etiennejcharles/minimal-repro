import { useForm } from 'react-hook-form'

export const MinimalAppExample = () => {
  const methods = useForm({
    defaultValues: {
      selectValue: '',
    },
  })
  const { register, setValue } = methods
  function handleClearSelectValue() {
    setValue('selectValue', '1')
  }

  return (
    <>
      <button data-test="clear-select" onClick={handleClearSelectValue}>
        Clear
      </button>
      <select
        id="selectValue"
        data-test="select-box-data-attr"
        {...register('selectValue')}
      >
        <option value="">Select an option</option>
        <option value="1">A</option>
        <option value="custom">B</option>
      </select>
    </>
  )
}
