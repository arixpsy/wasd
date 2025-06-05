type ProgressBarProps = {
  progress?: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => (
  <div className='relative h-[10px] w-96 overflow-hidden rounded-full bg-gray-200 dark:bg-d-text'>
    <div
      className='h-full bg-green-500 transition-[width] dark:bg-emerald-600'
      style={{ width: `${progress || 0}%` }}
    />
  </div>
)

export default ProgressBar
