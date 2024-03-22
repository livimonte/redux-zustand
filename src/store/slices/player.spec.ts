import { describe, expect, it } from 'vitest'
import { initialCourseData, play, next, player as reducer } from './player'

describe('player slice', () => {
  it('should be able to play', () => {
    const state = reducer(initialCourseData, play([1, 2]))

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(2)
  })

  it('should be able to play next video automatically', () => {
    const state = reducer(initialCourseData, next())

    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it('should be able to junp to the next module automatically', () => {
    const state = reducer({ ...initialCourseData, currentLessonIndex: 5 }, next())

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson index if there is not next lesson available', () => {
    const state = reducer(
      { ...initialCourseData, currentModuleIndex: 1, currentLessonIndex: 5 },
      next(),
    )

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(5)
  })
})
