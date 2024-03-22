import { describe, expect, it } from 'vitest'
import { play, next, PlayerState, player as reducer } from './player'

const initialState: PlayerState = {
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: 'Getting Started with Redux',
        lessons: [
          { id: '_shA5Xwe8_4', title: 'Redux in 100 Seconds', duration: '13:45' },
          { id: '93p3LxR9xfM', title: 'Redux X', duration: '10:05' },
          { id: 'poQXNp9ItL4', title: 'Redux X2', duration: '06:33' },
          { id: 'W_ATsETujaY', title: 'Redux X3', duration: '09:12' },
          { id: '0awA5Uw6SJE', title: 'Redux X4', duration: '03:23' },
          { id: '8KBq2vhwbac', title: 'Redux X5', duration: '11:34' },
        ],
      },
      {
        id: 2,
        title: 'Application Structure',
        lessons: [
          { id: 'gE48FQXRZ_o', title: 'Redux X6', duration: '13:45' },
          { id: 'ZySFOgejw0k', title: 'Redux X7', duration: '10:05' },
          { id: 'h5JA3wfuW1k', title: 'Redux X8', duration: '06:33' },
          { id: '6oAU5Kn9SBY', title: 'Redux X9', duration: '09:12' },
          { id: 'ZySFOgejw0k', title: 'Redux X10', duration: '13:45' },
          { id: '7cREd9mesMg', title: 'Redux X11', duration: '10:05' },
        ],
      },
    ],
  },
}

describe('player slice', () => {
  it('should be able to play', () => {
    const state = reducer(initialState, play([1, 2]))

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(2)
  })

  it('should be able to play next video automatically', () => {
    const state = reducer(initialState, next())

    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it('should be able to junp to the next module automatically', () => {
    const state = reducer({ ...initialState, currentLessonIndex: 5 }, next())

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson index if there is not next lesson available', () => {
    const state = reducer({ ...initialState, currentModuleIndex: 1, currentLessonIndex: 5 }, next())

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(5)
  })
})
