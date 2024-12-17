import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://pnklrwkqmvxxpkqaanrs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBua2xyd2txbXZ4eHBrcWFhbnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4MjQ3NTEsImV4cCI6MjA0OTQwMDc1MX0.WU-0ec4-YduH8auq1ZSsqvF0gweFPF_1d4TpDGK9_bE';



export const supabase = createClient(supabaseUrl, supabaseKey);
