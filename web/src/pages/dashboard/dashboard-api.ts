import { useQuery } from '@tanstack/react-query';
import type { DashboardStats } from '@belflow/shared';
import { api } from '../../lib/api';

export function useDashboard() {
  return useQuery({ queryKey: ['dashboard'], queryFn: () => api<DashboardStats>('/dashboard'), refetchInterval: 30_000 });
}
