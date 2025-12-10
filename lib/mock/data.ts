import type { User, Folder, Mail, SyncStatus } from '@/types';

// Mock User
export const mockUser: User = {
  id: 'user-1',
  email: 'user@example.com',
  name: '홍길동',
  profileImage: 'https://via.placeholder.com/40',
};

// Mock Folders
export const mockFolders: Folder[] = [
  {
    id: 'folder-1',
    name: '업무',
    path: '/업무',
    parentId: null,
    unreadCount: 12,
    children: [
      {
        id: 'folder-1-1',
        name: '프로젝트A',
        path: '/업무/프로젝트A',
        parentId: 'folder-1',
        unreadCount: 5,
        children: [],
      },
      {
        id: 'folder-1-2',
        name: '프로젝트B',
        path: '/업무/프로젝트B',
        parentId: 'folder-1',
        unreadCount: 7,
        children: [],
      },
    ],
  },
  {
    id: 'folder-2',
    name: '개인',
    path: '/개인',
    parentId: null,
    unreadCount: 3,
    children: [
      {
        id: 'folder-2-1',
        name: '쇼핑',
        path: '/개인/쇼핑',
        parentId: 'folder-2',
        unreadCount: 3,
        children: [],
      },
    ],
  },
  {
    id: 'folder-3',
    name: '뉴스레터',
    path: '/뉴스레터',
    parentId: null,
    unreadCount: 8,
    children: [],
  },
  {
    id: 'folder-4',
    name: '미분류',
    path: '/미분류',
    parentId: null,
    unreadCount: 2,
    children: [],
  },
];

// Mock Mails
export const mockMails: Mail[] = [
  {
    id: 'mail-1',
    subject: '[프로젝트A] 주간 회의록 공유드립니다',
    from: { name: '김팀장', email: 'kim@company.com' },
    to: [{ name: '홍길동', email: 'user@example.com' }],
    body: `안녕하세요, 홍길동님

이번 주 회의록을 공유드립니다.

## 주요 논의 사항
1. 신규 기능 개발 일정 확정
2. QA 테스트 계획 수립
3. 다음 스프린트 백로그 정리

## 액션 아이템
- [ ] 기획서 검토 (홍길동)
- [ ] API 명세서 작성 (박개발)
- [ ] 디자인 시안 전달 (이디자인)

감사합니다.`,
    bodyPreview: '안녕하세요, 홍길동님. 이번 주 회의록을 공유드립니다...',
    folderId: 'folder-1-1',
    folderPath: '/업무/프로젝트A',
    isRead: false,
    isStarred: true,
    receivedAt: '2025-12-10T09:30:00Z',
    classificationReason: '프로젝트A 관련 회의록으로 분류됨',
  },
  {
    id: 'mail-2',
    subject: 'PR Review 요청: feat/email-classification',
    from: { name: 'GitHub', email: 'noreply@github.com' },
    to: [{ name: '홍길동', email: 'user@example.com' }],
    body: `@developer님이 PR 리뷰를 요청했습니다.

**Pull Request #42**
feat: LLM 기반 메일 분류 로직 구현

변경 사항:
- OpenAI API 연동
- 분류 알고리즘 구현
- 단위 테스트 추가

[PR 보러가기](https://github.com/example/pigeon/pull/42)`,
    bodyPreview: '@developer님이 PR 리뷰를 요청했습니다...',
    folderId: 'folder-1-2',
    folderPath: '/업무/프로젝트B',
    isRead: false,
    isStarred: false,
    receivedAt: '2025-12-10T08:15:00Z',
    classificationReason: 'GitHub 알림으로 업무/프로젝트B로 분류됨',
  },
  {
    id: 'mail-3',
    subject: '주문하신 상품이 배송 완료되었습니다',
    from: { name: '쿠팡', email: 'no-reply@coupang.com' },
    to: [{ name: '홍길동', email: 'user@example.com' }],
    body: `홍길동님, 안녕하세요.

주문하신 상품이 배송 완료되었습니다.

주문번호: 2024121012345
상품명: 무선 키보드
배송완료일: 2025-12-10

[배송조회](https://www.coupang.com/tracking/12345)`,
    bodyPreview: '주문하신 상품이 배송 완료되었습니다...',
    folderId: 'folder-2-1',
    folderPath: '/개인/쇼핑',
    isRead: true,
    isStarred: false,
    receivedAt: '2025-12-10T07:00:00Z',
    classificationReason: '쇼핑몰 배송 알림으로 개인/쇼핑으로 분류됨',
  },
  {
    id: 'mail-4',
    subject: 'TechNews Weekly #128 - AI 트렌드 총정리',
    from: { name: 'TechNews', email: 'newsletter@technews.com' },
    to: [{ name: '홍길동', email: 'user@example.com' }],
    body: `이번 주 테크 뉴스 하이라이트

## AI 트렌드
- Claude 4 출시 임박
- GPT-5 루머 정리
- 오픈소스 LLM 성능 비교

## 개발자 도구
- VS Code 새 기능
- GitHub Copilot 업데이트

[전체 뉴스레터 보기](https://technews.com/weekly/128)`,
    bodyPreview: '이번 주 테크 뉴스 하이라이트...',
    folderId: 'folder-3',
    folderPath: '/뉴스레터',
    isRead: true,
    isStarred: false,
    receivedAt: '2025-12-09T18:00:00Z',
    classificationReason: '정기 뉴스레터로 분류됨',
  },
  {
    id: 'mail-5',
    subject: '안녕하세요, 문의드립니다',
    from: { name: 'Unknown', email: 'unknown@example.org' },
    to: [{ name: '홍길동', email: 'user@example.com' }],
    body: `안녕하세요.

일반적인 문의 메일입니다.

감사합니다.`,
    bodyPreview: '안녕하세요. 일반적인 문의 메일입니다...',
    folderId: 'folder-4',
    folderPath: '/미분류',
    isRead: false,
    isStarred: false,
    receivedAt: '2025-12-09T15:30:00Z',
    classificationReason: '분류 기준에 맞지 않아 미분류로 이동',
  },
];

// Mock Sync Status
export const mockSyncStatus: SyncStatus = {
  status: 'completed',
  progress: 100,
  totalMails: 50,
  processedMails: 50,
  lastSyncAt: '2025-12-10T10:00:00Z',
};

// Helper functions
export function getMailsByFolderId(folderId: string): Mail[] {
  return mockMails.filter((mail) => mail.folderId === folderId);
}

export function getMailById(mailId: string): Mail | undefined {
  return mockMails.find((mail) => mail.id === mailId);
}

export function getFolderById(folderId: string): Folder | undefined {
  const findFolder = (folders: Folder[]): Folder | undefined => {
    for (const folder of folders) {
      if (folder.id === folderId) return folder;
      if (folder.children) {
        const found = findFolder(folder.children);
        if (found) return found;
      }
    }
    return undefined;
  };
  return findFolder(mockFolders);
}
