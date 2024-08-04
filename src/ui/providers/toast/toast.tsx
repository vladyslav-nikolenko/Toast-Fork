import { createContext, useCallback, useContext, useState } from 'react';
import { ToastInfo, ToastProps, ToastType } from './types';
import { createPortal } from 'react-dom';
import { Toast } from '@/components/Toast';

const ToastContext = createContext<ToastProps | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastInfo, setToastInfo] = useState<ToastInfo | undefined>(undefined);

  const renderToast = useCallback((type: ToastType, message: string) => {
    setToastInfo({ type, message });
  }, []);

  const onCloseToast = () => {
    setToastInfo(undefined);
  };

  return (
    <ToastContext.Provider
      value={{
        renderToast,
      }}>
      {children}
      {toastInfo &&
        createPortal(
          <div className='absolute bottom-5 right-5'>
            <Toast close={onCloseToast} type={toastInfo?.type}>
              {toastInfo?.message}
            </Toast>
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};
