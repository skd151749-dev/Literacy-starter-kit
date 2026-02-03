// User Profile System
export interface UserProfile {
  username: string;
  avatar: string;
  createdAt: string;
  totalXP: number;
  level: number;
  favoriteActivity?: string;
}

const PROFILE_STORAGE_KEY = 'literacy-user-profile';

export function getUserProfile(): UserProfile | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
}

export function saveUserProfile(profile: UserProfile) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

export function createProfile(username: string, avatar: string): UserProfile {
  const profile: UserProfile = {
    username,
    avatar,
    createdAt: new Date().toISOString(),
    totalXP: 0,
    level: 1,
  };
  saveUserProfile(profile);
  return profile;
}

export function updateProfile(updates: Partial<UserProfile>) {
  const currentProfile = getUserProfile();
  if (!currentProfile) return null;
  
  const updatedProfile = { ...currentProfile, ...updates };
  saveUserProfile(updatedProfile);
  return updatedProfile;
}

export const AVATAR_OPTIONS = [
  '😀', '😎', '🤓', '🥳', '🤩', '😇', '🦊', '🐼', '🦁', '🐯', 
  '🐨', '🐸', '🦉', '🦄', '🌟', '⭐', '🎯', '🚀', '🎨', '📚'
];
