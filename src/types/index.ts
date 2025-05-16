export interface EmailJSResponse {
  status: number;
  text: string;
}

declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, unknown>,
        publicKey: string
      ) => Promise<EmailJSResponse>;
    };
  }
}