export type ToastType = 'success' | 'error';

export type ToastInput = {
  type: ToastType;
  body: React.ReactNode;
};
export type ToastInfo = {
  type: ToastType;
  message: string;
};
export type RenderToast = (type: ToastType, message: string) => void;

export interface ToastProps {
  renderToast: RenderToast;
}
