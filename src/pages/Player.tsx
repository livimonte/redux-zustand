import { Loader, MessageCircle } from 'lucide-react'
import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'
import { useEffect } from 'react'
import { useCurrentLesson } from '../zustand/hooks'
import { useStore } from '../zustand/store/store'

export function Player() {
  const { currentLesson } = useCurrentLesson()
  const { isLoading, modules, load } = useStore((store) => {
    return {
      isLoading: store.isLoading,
      modules: store.course?.modules,
      load: store.load,
    }
  })

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    if (currentLesson) {
      document.title = `Watching: ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center min-w-[1000px]">
      <div className="flex w-[1200px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1 min-w-96">
            <Video />
          </div>
          <aside className="w-1/3 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {isLoading ? (
              <div className="flex h-full items-center justify-center">
                <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
              </div>
            ) : (
              modules &&
              modules.map((module, index) => {
                return (
                  <Module
                    key={module.id}
                    moduleIndex={index}
                    title={module.title}
                    amountOfLessons={module.lessons.length}
                  />
                )
              })
            )}
          </aside>
        </main>
      </div>
    </div>
  )
}
