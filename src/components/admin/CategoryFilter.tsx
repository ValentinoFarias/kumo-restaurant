'use client'
import { useRouter, useSearchParams } from 'next/navigation'

const CATEGORIES = [
  { label: 'All', value: null },
  { label: 'Small Plates', value: 'small-plates' },
  { label: 'Broths', value: 'broths' },
  { label: 'Sides', value: 'sides' },
  { label: 'Desserts', value: 'desserts' },
  { label: 'Drinks', value: 'drinks' },
]

export function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const active = searchParams.get('where[category][equals]')

  function handleFilter(value: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set('where[category][equals]', value)
    } else {
      params.delete('where[category][equals]')
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <div style={{ display: 'flex', gap: '8px', padding: '16px 0 8px', flexWrap: 'wrap' }}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value ?? 'all'}
          type="button"
          onClick={() => handleFilter(cat.value)}
          style={{
            padding: '5px 14px',
            borderRadius: '4px',
            border: '1px solid var(--theme-elevation-200)',
            background: active === cat.value ? 'var(--theme-success-500)' : 'transparent',
            color: active === cat.value ? '#fff' : 'inherit',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: active === cat.value ? 600 : 400,
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
