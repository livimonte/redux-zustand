import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialCourseData = {
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  course: {
    modules: [
      {
        id: '1',
        title: 'Getting Started with Redux',
        lessons: [
          { id: '_shA5Xwe8_4', title: 'Redux in 100 Seconds', duration: '13:45' },
          { id: '93p3LxR9xfM', title: 'Redux X', duration: '10:05' },
          { id: 'poQXNp9ItL4', title: 'Redux X2', duration: '06:33' },
          { id: 'W_ATsETujaY', title: 'Redux X3', duration: '09:12' },
          { id: '_shA5Xwe8_4', title: 'Redux X4', duration: '03:23' },
          { id: '8KBq2vhwbac', title: 'Redux X5', duration: '11:34' },
        ],
      },
      {
        id: '2',
        title: 'Application Structure',
        lessons: [
          { id: 'gE48FQXRZ_o', title: 'Redux X6', duration: '13:45' },
          { id: '_shA5Xwe8_4', title: 'Redux X7', duration: '10:05' },
          { id: 'h5JA3wfuW1k', title: 'Redux X8', duration: '06:33' },
          { id: 'poQXNp9ItL4', title: 'Redux X9', duration: '09:12' },
          { id: '_shA5Xwe8_4', title: 'Redux X10', duration: '13:45' },
          { id: '93p3LxR9xfM', title: 'Redux X11', duration: '10:05' },
        ],
      },
    ],
  },
}

const playerSlice = createSlice({
  name: 'player',
  initialState: initialCourseData,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson = state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course.modules[nextModuleIndex]

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      }
    },
  },
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions
