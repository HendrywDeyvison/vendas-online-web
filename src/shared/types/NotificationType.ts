export type NotificationTypeEnum = 'success' | 'info' | 'warning' | 'error';

export interface NotificationType {
  type: NotificationTypeEnum;
  message: string;
  description?: string;
}
