type ProgressBarProps = {
  progress?: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => (
  <div className='dark:bg-d-text relative h-[10px] w-96 overflow-hidden rounded-full bg-gray-200'>
    <div
      className='h-full bg-green-500 transition-[width] dark:bg-emerald-600'
      style={{ width: `${progress || 0}%` }}
    />
  </div>
)

type SplitProgressBarProps = {
  leftProgress?: number
  rightProgress?: number
}

const SplitBar = ({ leftProgress, rightProgress }: SplitProgressBarProps) => (
  <div className='dark:bg-d-text relative h-[10px] w-96 overflow-hidden rounded-full bg-gray-200 grid grid-cols-2'>
    <div
      className='h-full bg-green-500 transition-[width] dark:bg-emerald-600 place-self-end'
      style={{ width: `${leftProgress || 0}%` }}
    />

    <div
      className='h-full bg-green-500 transition-[width] dark:bg-emerald-600'
      style={{ width: `${rightProgress || 0}%` }}
    />
  </div>
)

ProgressBar.Split = SplitBar

export default ProgressBar
