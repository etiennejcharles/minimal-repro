import { MinimalAppExample } from '@/pages/MinimalAppExample'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
  test('Should show the clear button with no warnings', async () => {
    const { user } = setup(<MinimalAppExample />)

    await user.selectOptions(screen.getByRole('combobox'), 'custom')

    await user.click(screen.getByTestId('clear-select'))

    expect(screen.getByRole('combobox')).toHaveDisplayValue(['A'])
  })
})

function setup(jsx, options) {
  return {
    user: userEvent.setup(options),
    ...render(jsx),
  }
}
