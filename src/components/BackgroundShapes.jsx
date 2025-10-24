export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* 
        setting background color for both mode */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-black" />

      <div className="relative h-full w-full overflow-hidden">
        <div
          className="
            absolute -top-20 -left-20 h-[300px] w-[300px] animate-blob-1 rounded-full blur-3xl
            bg-purple-200/20 dark:bg-purple-600/20
          "
        />

        <div
          className="
            absolute -bottom-20 -right-20 h-[300px] w-[300px] animate-blob-2 rounded-full blur-3xl
            bg-blue-200/20 dark:bg-blue-600/20
          "
        />

        <div
          className="
            absolute -bottom-1/4 left-1/4 h-[200px] w-[200px] animate-blob-3 rounded-full blur-3xl
            bg-pink-200/20 dark:bg-pink-600/20
          "
        />
      </div>
    </div>
  );
}
