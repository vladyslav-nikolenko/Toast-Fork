export function Toast({ children, close, type }: { children?: string; close: () => void; type?: string }) {
  setTimeout(() => {
    close();
  }, 5000);

  return (
    <div className={'p-2.5 border border-black rounded min-w-60 min-h-20 relative	bg-neutral-100'}>
      <div className='flex justify-between mb-1.5'>
        <h3>{type === 'success' ? 'Success message' : 'Error message'}</h3>
        <button onClick={close} type='button'>
          x
        </button>
      </div>

      <p>{children}</p>
    </div>
  );
}
