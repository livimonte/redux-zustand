import { useStore } from './store'

export const useCurrentLesson = () => {
  return useStore((store) => {
    const { currentModuleIndex, currentLessonIndex } = store

    const currentModule = store.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}
