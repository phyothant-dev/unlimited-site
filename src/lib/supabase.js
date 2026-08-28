import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getProjects(category) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

export async function submitVote(projectId, category) {
  const fingerprint = `guest_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
  const { data, error } = await supabase
    .from('votes')
    .insert({ project_id: projectId, category, fingerprint })
    .select()

  if (error) throw error
  return data
}