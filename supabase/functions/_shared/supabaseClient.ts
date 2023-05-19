import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://erspvsdfwaqjtuhymubj.supabase.co';
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyc3B2c2Rmd2FxanR1aHltdWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1ODY0MjcsImV4cCI6MTk5OTE2MjQyN30.2AItrHcB7A5bSZ_dfd455kvLL8fXLL7IrfMBoFmkGww';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getSupa = async (access_token: string) => {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    await supabase.auth.setSession({ access_token, refresh_token: '' });

    return supabase;
};
