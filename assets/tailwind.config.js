module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        '1': 'var(--bg-brand-1)',
        '2': 'var(--bg-brand-2)',
        '3': 'var(--bg-brand-3)',
      },
      copy: {
        base: 'var(--text-brand-1)',
        accent: 'var(--text-brand-2)',
        mute: 'var(--text-brand-3)',
      },
      primary: {
        '1': 'var(--brand-primary-1)',
        '2': 'var(--brand-primary-2)',
        '3': 'var(--brand-primary-3)',
        '4': 'var(--brand-primary-4)',
      },
      secondary: {
        '1': 'var(--brand-secondary-1)',
        '2': 'var(--brand-secondary-2)',
        '3': 'var(--brand-secondary-3)',
        '4': 'var(--brand-secondary-4)',
        '5': 'var(--brand-secondary-5)',
      },
    },
    fontFamily: {
      sans: [
        'Roboto',
        'Nunito Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}

