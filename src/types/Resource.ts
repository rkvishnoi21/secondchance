import { ReactNode } from 'react';

export interface BaseResourceItem {
  title: string;
  description: string;
  action: string;
  actionText: string;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  items: Array<BaseResourceItem & {
    schedule?: string;
    urgent?: boolean;
    external?: boolean;
    badge?: string;
  }>;
}
