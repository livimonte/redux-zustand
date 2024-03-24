import ReactPlayer from 'react-player'
import { Loader } from 'lucide-react'
import { useCurrentLesson } from '../zustand/hooks'
import { useStore } from '../zustand/store/store'

export function Video() {
  const { currentLesson } = useCurrentLesson()
  const { isLoading, next, isFirstVideo } = useStore((store) => {
    const isFirstVideo = store.currentModuleIndex === 0 && store.currentLessonIndex === 0
    return {
      isLoading: store.isLoading,
      next: store.next,
      isFirstVideo,
    }
  })

  function handlePlayNext() {
    next()
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing={!isFirstVideo}
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.videoId}`}
        />
      )}
    </div>
  )
}
