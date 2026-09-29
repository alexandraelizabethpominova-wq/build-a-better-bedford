import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xjrapvrtsyxkntajacfe.supabase.co'
const supabaseKey = 'sb_publishable_GU_qCXhrlB6D0URYrBnFcA_g1lg_kCT'

export const supabase = createClient(supabaseUrl, supabaseKey)
