import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://hrbvsovirirhxfedsbab.supabase.co'
const SUPABASE_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY2OTM4OCwiZXhwIjoxOTU1MjQ1Mzg4fQ.DgkfElSprAbNk87Plw24XqD3BvQZZNftazDJT9ISam8'

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY)
export default supabase

