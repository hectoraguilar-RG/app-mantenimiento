import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ujirmnokxcuyhkwdhted.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_7pKU6_eloYtapHo5bmAwFw_6nFAFx7w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);