import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rmwpubditkczpofqvrwm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtd3B1YmRpdGtjenBvZnF2cndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMTI2NDQsImV4cCI6MjA2ODY4ODY0NH0.FQNdtebQogSFF9jCogKhVs-WQFprzJha5eDynAsQM20';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 