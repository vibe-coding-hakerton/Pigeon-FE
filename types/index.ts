// User
export interface User {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
}

// Folder
export interface Folder {
  id: string;
  name: string;
  path: string;
  parentId: string | null;
  unreadCount: number;
  children?: Folder[];
}

// Mail
export interface Mail {
  id: string;
  subject: string;
  from: {
    name: string;
    email: string;
  };
  to: {
    name: string;
    email: string;
  }[];
  body: string;
  bodyPreview: string;
  folderId: string;
  folderPath: string;
  isRead: boolean;
  isStarred: boolean;
  receivedAt: string;
  classificationReason?: string;
}

// Sync Status
export type SyncStatusType = 'idle' | 'syncing' | 'classifying' | 'completed' | 'error';

export interface SyncStatus {
  status: SyncStatusType;
  progress: number;
  totalMails: number;
  processedMails: number;
  lastSyncAt: string | null;
  errorMessage?: string;
}
