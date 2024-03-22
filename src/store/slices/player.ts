import { createSlice } from '@reduxjs/toolkit'

const initialCourseData = {
  modules: [
    {
      id: '1',
      title: 'Getting Started with React',
      lessons: [
        { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
        { id: 'w-DW4DhDfcw', title: 'Post Styling', duration: '10:05' },
        { id: 'D83-55LUdKE', title: 'Header Component', duration: '06:33' },
        { id: 'W_ATsETujaY', title: 'Sidebar Component', duration: '09:12' },
        { id: 'Pj8dPeameYo', title: 'Global CSS', duration: '03:23' },
        { id: '8KBq2vhwbac', title: 'Comment Form', duration: '11:34' },
      ],
    },
    {
      id: '2',
      title: 'Application Structure',
      lessons: [
        { id: 'gE48FQXRZ_o', title: 'Comment Component', duration: '13:45' },
        { id: 'Ng_Vk4tBl0g', title: 'Responsiveness', duration: '10:05' },
        { id: 'h5JA3wfuW1k', title: 'JSX Interactions', duration: '06:33' },
        { id: '1G0vSTqWELg', title: 'Using State', duration: '09:12' },
      ],
    },
    {
      id: '3',
      title: 'Understanding Redux',
      lessons: [
        { id: 'poQXNp9ItL4', title: 'Redux for Beginners', duration: '14:44' },
        { id: 'CVpUuw9XSjY', title: 'Learn Redux in 20 Minutes', duration: '20:53' },
        { id: '9zySeP5vH9c', title: 'Redux and React Hooks', duration: '18:28' },
        { id: '93p3LxR9xfM', title: 'Redux Saga with API calls', duration: '23:16' },
        { id: 'k68HXdNU2oM', title: 'Redux Thunk Explained', duration: '10:45' },
        { id: 'xcLZpRncLZQ', title: 'Advanced Redux Patterns', duration: '15:02' },
      ],
    },
  ],
}

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: initialCourseData,
  },
  reducers: {},
})

export const player = playerSlice.reducer
