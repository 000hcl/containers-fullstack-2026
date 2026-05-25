import { render, screen } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import Todo from './Todo'

test('renders todo correctly', () => {
    const todo = {
        text: 'Write tests',
        done: false
    }
    const mockonClickDelete = vi.fn()
    const mockonClickComplete = vi.fn()

    render(<Todo todo={todo} onClickComplete={mockonClickComplete} onClickDelete={mockonClickDelete}/>)
    const text = screen.queryByText('Write tests')
    const doneInfo = screen.queryByText('This todo is not done')
    expect(text).toBeDefined()
    expect(doneInfo).toBeDefined()
})