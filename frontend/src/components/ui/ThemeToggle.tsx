import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  return (
    <button className="icon-button" type="button" onClick={toggleTheme} aria-label={t('common.theme')}>
      <span aria-hidden="true">{theme === 'light' ? '◐' : '☼'}</span>
    </button>
  );
}

