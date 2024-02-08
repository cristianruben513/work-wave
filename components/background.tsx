export default function Background() {
  return (
    <div className="
    fixed inset-0 -z-10 h-full w-full 
    bg-white dark:bg-neutral-900 
    bg-[linear-gradient(to_right,#dcdcdc_1px,transparent_1px),linear-gradient(to_bottom,#dcdcdc_1px,transparent_1px)]
    dark:bg-[linear-gradient(to_right,#272727_1px,transparent_1px),linear-gradient(to_bottom,#272727_1px,transparent_1px)]  
    bg-[size:6rem_4rem]">
      <div className="
      absolute bottom-0 left-0 right-0 top-0 
      bg-[radial-gradient(circle_400px_at_100%_200px,#d5c5ff,transparent)] 
      md:bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]
      dark:bg-[radial-gradient(circle_400px_at_100%_200px,rgba(255,0,182,.10),transparent)] 
      dark:md:bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,0,182,.10),transparent)]">
      </div>
    </div>
  )
}
